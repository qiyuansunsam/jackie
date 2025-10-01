#!/bin/bash

# Main build script for the entire application

echo "========================================="
echo "Jackie Portfolio - Full Stack Application"
echo "========================================="

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "Checking prerequisites..."

if ! command_exists python3; then
    echo "Error: Python 3 is not installed"
    exit 1
fi

if ! command_exists npm; then
    echo "Error: Node.js/npm is not installed"
    exit 1
fi

echo "Prerequisites check passed!"

# Start backend in background
echo ""
echo "Starting Backend Server..."
cd backend
chmod +x run.sh
./run.sh &
BACKEND_PID=$!
cd ..

# Wait for backend to start
echo "Waiting for backend to start..."
sleep 5

# Check if backend is running
if ! curl -s http://localhost:5000/api/health > /dev/null; then
    echo "Warning: Backend might not be running properly"
else
    echo "Backend is running successfully!"
fi

# Start frontend
echo ""
echo "Starting Frontend Server..."
cd frontend
chmod +x start.sh
./start.sh &
FRONTEND_PID=$!
cd ..

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "Shutting down servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    echo "Servers stopped"
    exit 0
}

# Set up trap to cleanup on script exit
trap cleanup EXIT INT TERM

echo ""
echo "========================================="
echo "Application is running!"
echo "Frontend: http://localhost:3000"
echo "Backend API: http://localhost:5000/api"
echo "Host Mode: http://localhost:3000?host=true"
echo "Press Ctrl+C to stop both servers"
echo "========================================="

# Keep script running
wait