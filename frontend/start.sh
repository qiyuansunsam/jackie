#!/bin/bash

# Frontend start script for local development

echo "Starting Jackie Portfolio Frontend..."

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Set development environment variables
export REACT_APP_API_URL=http://localhost:5000/api

# Start the development server
echo "Starting React development server on http://localhost:3000"
npm start
