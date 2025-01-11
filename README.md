# Project Name: Simple frontend and backend app with deployment
## Overview
This project consists of a Frontend (hosted on Firebase) and a Backend (hosted on AWS EC2). The frontend makes requests to the backend API hosted on EC2, and the backend provides responses with JSON data.

# Prerequisites
Before starting, ensure you have the following installed:

Node.js (for backend)
npm (for managing dependencies)
Firebase CLI (for deploying frontend to Firebase)
AWS EC2 (for hosting the backend)
Local Setup
# 1. Clone the Repository
bash

git clone https://github.com/your-username/your-repository.git
cd your-repository
# 2. Set Up Backend (Node.js)
Install dependencies: Navigate to the backend directory and install required dependencies.

bash

cd backend
npm install
Run the backend locally: Make sure the backend is set to listen on port 80 (or a custom port) and start the server.

bash

node app.js
Test locally: Open a browser or terminal and test the backend endpoint:

bash

curl http://localhost:80/api/endpoint
You should receive a response like:

json
Copy code
{
    "message": "Hello from the backend!",
    "timestamp": "2025-01-11T12:00:00.000Z"
}
# 3. Set Up Frontend (Firebase)
Install Firebase CLI: If you haven’t installed the Firebase CLI, run:

bash

npm install -g firebase-tools
Log in to Firebase:

bash
Copy code
firebase login
Navigate to the frontend directory:

bash

cd frontend
Install frontend dependencies:

bash

npm install
Run the frontend locally:

bash

firebase serve
Test the frontend: Open the browser and go to http://localhost:5000/. When you click the "Fetch Data" button, you should see the response from the backend.

# Deployment
Deploy Backend on AWS EC2
Launch an EC2 instance:

## Choose an appropriate EC2 instance type (e.g., t2.micro).
Set up security groups to allow HTTP (80) or HTTPS (443) traffic.
SSH into your EC2 instance:

bash

ssh -i your-key.pem ec2-user@<EC2-PUBLIC-IP>
Install Node.js (if not installed):

bash

sudo apt install -y nodejs
## Clone the repository:

bash

git clone https://github.com/your-username/your-repository.git
cd your-repository/backend
Install dependencies:

bash

npm install
## Start the backend:

bash

node app.js
## Verify the backend is running: Test it by accessing the backend through your EC2 instance's public IP:

bash

curl http://<EC2-PUBLIC-IP>:80/api/endpoint


## Deploy Frontend on Firebase
Initialize Firebase in the frontend project:

bash

firebase init
Select the following options:

# Choose Hosting for Firebase Hosting.
Select the project you've created on Firebase.
Build the frontend: If using a build system (like webpack or create-react-app), make sure to build the frontend first:

bash

npm run build
Deploy the frontend to Firebase: Once the build is complete, deploy your frontend:

bash

## firebase deploy
Access the deployed frontend: After deployment, Firebase will provide a URL where the frontend is accessible.

Troubleshooting
Backend Issues
Port already in use: If the backend fails to start because the port is already in use, check for running services using ss or netstat and stop them.
Backend not accessible externally: Ensure that the EC2 security group is configured to allow inbound traffic on port 80 (or 443 for HTTPS).
