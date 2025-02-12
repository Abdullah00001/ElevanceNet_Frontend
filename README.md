# ElevanceNet Frontend

## Project Overview

ElevanceNet is a professional social networking platform that helps users stay focused and productive by showing content strictly aligned with their preferences.

## Features

- **User Authentication**: Signup, login, and email verification.
- **User Profile Management**: Manage education, work, social links, and profile details.
- **Content Feed**: A preference-based content feed.
- **Post Interaction**: Create, update, delete posts, like/unlike, comment.
- **Search**: Search posts and users.
- **Account Management**: Account deletion.


## Setup and Installation

### With Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/elevancenet.git
    ```
2. Navigate to the project directory:
    ```
    cd elevancenet
    ```
3. Build the Docker image:
    ```
    docker build -t elevancenet .
    ```
4. Run the Docker container:
    ```
    docker run -p 5173:5173 elevancenet
    ```
4. Access the application at http://localhost:3000.

## 🚀 Deployment

The backend is hosted on Vercel for production. The CI/CD pipeline automatically pushes updates to Docker Hub.

## 🛠️ Contribution Guidelines

This project is currently not open for external contributions. However, feel free to check the code and suggest improvements via issues.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.

## 📞 Contact

For any issues or inquiries, feel free to reach out to us at:  
[support@elevancenet.com](mailto:support@elevancenet.com)

Your contributions are highly appreciated! 🚀