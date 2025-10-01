from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///messages.db')
if app.config['SQLALCHEMY_DATABASE_URI'].startswith('postgres://'):
    app.config['SQLALCHEMY_DATABASE_URI'] = app.config['SQLALCHEMY_DATABASE_URI'].replace('postgres://', 'postgresql://', 1)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')

db = SQLAlchemy(app)
CORS(app)

# Models
class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    sender_type = db.Column(db.String(20), nullable=False)  # 'visitor' or 'host'
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    sender_name = db.Column(db.String(100), default='Anonymous')

    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'sender_type': self.sender_type,
            'timestamp': self.timestamp.isoformat(),
            'sender_name': self.sender_name
        }

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'API is running'}), 200

@app.route('/api/messages', methods=['GET'])
def get_messages():
    try:
        messages = Message.query.order_by(Message.timestamp.desc()).limit(50).all()
        return jsonify([msg.to_dict() for msg in messages]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/messages', methods=['POST'])
def create_message():
    try:
        data = request.json
        
        if not data or 'content' not in data:
            return jsonify({'error': 'Content is required'}), 400
        
        # Validate sender_type
        sender_type = data.get('sender_type', 'visitor')
        if sender_type not in ['visitor', 'host']:
            sender_type = 'visitor'
        
        # Create new message
        new_message = Message(
            content=data['content'][:500],  # Limit message length
            sender_type=sender_type,
            sender_name=data.get('sender_name', 'Anonymous')[:50]
        )
        
        db.session.add(new_message)
        db.session.commit()
        
        return jsonify(new_message.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@app.route('/api/messages/<int:message_id>', methods=['DELETE'])
def delete_message(message_id):
    try:
        # Only allow host to delete messages
        # In production, you'd want proper authentication
        auth_header = request.headers.get('Authorization')
        if auth_header != 'Bearer host-secret-key':
            return jsonify({'error': 'Unauthorized'}), 401
        
        message = Message.query.get(message_id)
        if not message:
            return jsonify({'error': 'Message not found'}), 404
        
        db.session.delete(message)
        db.session.commit()
        
        return jsonify({'message': 'Deleted successfully'}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# Portfolio data endpoint
@app.route('/api/portfolio', methods=['GET'])
def get_portfolio_data():
    portfolio = {
        'name': 'Jackie Yang',
        'title': 'BCom | Accounting & Finance Student',
        'location': 'Auckland, New Zealand',
        'email': 'ysy020625@gmail.com',
        'phone': '0273323518',
        'linkedin': 'https://www.linkedin.com/in/jackie-yang-03aa1726a',
        'about': 'International student who has finished studying at the University of Auckland, taking bachelor of commerce degree, majoring in Accounting and Finance.',
        'skills': {
            'technical': ['Financial Accounting', 'Google Forms', 'Management', 'Statistics', 'Economics'],
            'languages': [
                {'name': 'Mandarin', 'level': 'Native'},
                {'name': 'English', 'level': 'Professional'},
                {'name': 'Cantonese', 'level': 'Limited Working'},
                {'name': 'Spanish', 'level': 'Elementary'}
            ]
        }
    }
    return jsonify(portfolio), 200

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)