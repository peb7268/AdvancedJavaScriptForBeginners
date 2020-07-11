#!/bin/bash

su dev-user

su dev-user -c "sudo chmod -R 777 /usr/lib/node_modules"
su dev-user -c "sudo chmod -R 777 /usr/bin"

echo "Installing global node modules..."
su dev-user -c "npm i webpack webpack-cli browser-sync node-sass npm-run-all -g"

echo "Installing local node modules..."
cd /var/www
su dev-user -c "npm install"

echo "Starting env..."
su dev-user -c "npm run start:dev"

sleep infinity