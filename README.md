# user-management-system-frontend
Group Project Activity: Full-Stack Application Development - FRONTEND(Angular.js)


## Introduction
The User Management System is a comprehensive web-based application designed to simplify user authentication, authorization, and account management. It offers a secure and efficient solution for handling user registration, login, and role-based access control.

Developed using Node.js and MySQL for the backend and Angular for the frontend, the system delivers a seamless and user-friendly experience for both end-users and administrators. Key features include JWT-based authentication, email verification, password recovery, profile management, and an admin dashboard for managing user accounts.

To support development and testing, the system also includes a fake backend implementation, allowing for backend-less development without the need for a live server.

This fully functional Angular boilerplate provides:

 • Email-based user sign-up and verification

 • JWT authentication with token refresh capability

 • Role-based access control

 • User profile management

 • Administrator dashboard

 • Integrated fake backend for streamlined development 

This project is developed by:
- **Marcelo Cagara J.r**


## Installation
   1. Clone the repository:
        git clone https://github.com/mikyllatherese/user-management-system-frontend to an external site.
   2. Install dependencies:
        npm install
   3. Start the backend server:
        npm start
   4. Start the Angular app:
        ng serve
---

## Usage
# User
    • Register a new account at /account/register.
    • Verify your email using the link sent to your inbox.
    • Log in at /account/login.
    • View and update your profile at /profile/update.
# Admin
    • Log in with an admin account at /account/login.
    • Access dashboard at /admin/accounts/list.
    • Manage user accounts (CRUD) at /admin/accounts/add-edit.

## Testing
    • Functional Testing: Covered key scenarios such as sign-up, login, role permissions, and password reset.
    • Security Testing: Ensured JWT validation, secure routes, and form validations.
    • Code Review: Ensured adherence to best practices, code organization, and documentation.
    • Test cases and detailed reports can be found here (insert the link).

## Contributing

# Frontend Development:

## License
This project is licensed under the MIT License.
See LICENSE for details.