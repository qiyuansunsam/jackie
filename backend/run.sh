#!/bin/bash

# Backend start script for local development

echo "Starting Jackie Portfolio Backend..."

# Kill any process using port 5000
lsof -ti:5000 | xargs kill -9 2>/dev/null || true

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install/update dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

# Set environment variables for development
export FLASK_APP=app.py
export FLASK_ENV=development
export DATABASE_URL="sqlite:///messages.db"

# Initialize database
python -c "from app import app, db; app.app_context().push(); db.create_all()"

# Run the application
echo "Starting Flask server on http://localhost:5000"
python app.py