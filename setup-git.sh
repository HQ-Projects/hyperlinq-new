#!/bin/bash

# Set your Git username and email
git config --global user.name "Shoaib Khan"
git config --global user.email "hyperlinqtechnology@gmail.com"

# Initialize Git repo if not already
git init

# Add all files
git add .

# Commit with a message
git commit -m "Initial commit"

# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/HQ-Projects/hyperlinq-new.git

# Push to main branch
git branch -M main
git push -u origin main

# Set up SSH
