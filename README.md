# Library-Management-System

Library Management System
Overview
This project is a Library Management System built using Django (backend) and React.js (frontend). The system allows an admin to perform CRUD (Create, Read, Update, Delete) operations on books, such as adding, updating, deleting, and retrieving book records. The system also includes admin signup and login functionality using email and password (instead of the default Django username and password). The backend is built using Django REST Framework (DRF) with token-based authentication for secure access to the APIs.

Key Features
Admin Authentication:

Admins can sign up and log in using their email and password.
Token-based authentication is used to secure the APIs.

Book Management:

Admins can create, retrieve, update, and delete book records.
Only authenticated admins can perform these operations.


Frontend:

Built using React.js to display the backend data in a user-friendly UI.
Allows admins to interact with the system through a web interface.

Technologies Used
Backend:

Django
Django REST Framework (DRF)
Token-based authentication (using SimpleJWT)
MySQL database

Frontend:

React.js
Axios for API calls
Tailwind CSS for styling

APIs

Admin Signup: /api/signup/
Admin Login: /api/login/

Book CRUD Operations:

Create: /api/books/create/
Retrieve All: /api/books/
Retrieve Single: /api/books/<int:pk>/
Update: /api/books/update/<int:pk>/
Delete: /api/books/delete/<int:pk>/

Setup Backend:

Install dependencies: pip install -r requirements.txt
Configure MySQL database in settings.py.
Run migrations: python manage.py migrate
Start the server: python manage.py runserver

Frontend:

Install dependencies: npm install
Start the development server: npm start

Conclusion
This project demonstrates how to build a Library Management System using Django REST Framework for the backend and React.js for the frontend. It includes features like admin authentication, book management, and token-based authentication to ensure secure access to the system. The frontend provides a user-friendly interface for admins to manage books and for students to view available books.
