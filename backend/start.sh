#!/bin/bash

# Backend start script for production deployment

echo "Starting Jackie Portfolio Backend API..."

# Kill any existing processes on the PORT
if [ -n "$PORT" ]; then
    echo "Checking for processes on port $PORT..."
    lsof -ti:$PORT | xargs kill -9 2>/dev/null || true
    sleep 2
fi

# Initialize database
echo "Initializing database..."
python -c "from app import app, db; app.app_context().push(); db.create_all()"

# Start with gunicorn
PORT=${PORT:-5000}
echo "Starting gunicorn on port $PORT..."
exec gunicorn app:app --bind 0.0.0.0:$PORT --timeout 120 --workers 4
