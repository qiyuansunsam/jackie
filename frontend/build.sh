#!/bin/bash

# Frontend build script for production

echo "Building Jackie Portfolio Frontend..."

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the production bundle
echo "Creating production build..."
npm run build

echo "Build complete! Static files are in ./build directory"