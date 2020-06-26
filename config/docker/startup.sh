#!/bin/bash

cd /var/www/

echo "Installing node modules..."
npm install

npm run start:dev