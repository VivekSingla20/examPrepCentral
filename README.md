# ExamPrep Central

**ExamPrep Central** is a web platform designed to assist students, particularly 1st and 2nd-year college students, in managing their studies. The platform offers a centralized space for accessing study materials, organizing tasks, and receiving important updates.

## Features

- **User Authentication**: Secure email and password sign-up and login with OTP verification for additional security.
- **To-Do List**: A personalized to-do list feature for students to organize their tasks and track their progress.
- **Study Materials**: Access to essential study resources including notes, previous year questions, and course-related content.
- **Academic Calendar**: A detailed academic calendar that helps students stay updated with important dates.
- **Email Reminders**: Allows users to receive email reminders for selected dates/events.
- **Responsive Design**: The platform is designed to work on multiple devices, including desktops, tablets, and smartphones.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: OTP Verification (custom implementation)
- **Email Service**: Nodemailer (for email reminders)
- **State Management**: React Context API
- **Routing**: `react-router-dom`

  
## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js
- MySQL
- Nodemailer (for email functionality)

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/examprepcentral.git
    ```

2. Navigate into the project directory:

    ```bash
    cd examprepcentral
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Set up the environment variables:

    - Create a `.env` file in the root of your project.
    - Add the following variables:
  
      ```bash
      DB_HOST=your_mysql_host
      DB_USER=your_mysql_user
      DB_PASS=your_mysql_password
      DB_NAME=your_database_name
      EMAIL_USER=your_email_service_user
      EMAIL_PASS=your_email_service_password
      ```

5. Initialize the database schema:

    ```bash
    # Run the SQL file or execute commands to set up your database tables
    ```

6. Start the backend server:

    ```bash
    npm run start:backend
    ```

7. Start the frontend React application:

    ```bash
    npm start
    ```

## Project Structure

- **Backend**: The backend code is responsible for user authentication, to-do list management, and email reminders.
- **Frontend**: React components are used to build the user interface for login/signup, task management, and study material access.

## Contributions

Contributions are welcome! Please follow the standard GitHub pull request process.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License.
