# 🔍 Lost & Found Web

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-339933?logo=node.js&logoColor=white)

**Lost & Found Web** is a MERN stack (MongoDB, Express.js, React, Node.js) based web application designed to help users report and find lost or found items within their community. It offers a user-friendly interface for posting, searching, and managing lost and found reports.

## 🚀 Key Features

- **User Authentication**: Secure registration and login to protect user data.
- **Item Posting**: Users can post details of lost or found items, including description, location, and image.
- **Search & Filter**: Powerful search and filter tools based on category, location, and date.
- **User Dashboard**: Personal dashboard for users to manage their posts.
- **Email Notifications**: Notification system via email to update users on their reports.
- **Responsive Design**: Optimized layout for both mobile and desktop devices.

## 🛠️ Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Others**: Multer for image uploads, Nodemailer for email notifications

## 📦 Installation and Usage

### Prerequisites

Make sure you have Node.js and MongoDB installed.

### Steps

1. **Clone this repository:**

   ```bash
   git clone https://github.com/ItsMeD4N/Lost-Found-Web.git
   cd Lost-Found-Web
   ```

2. **Install dependencies for server and client:**

   ```bash
   # For server
   cd server
   npm install

   # For client
   cd ../client
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file inside the `server` directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. **Run the application:**

   ```bash
   # Run server
   cd ../server
   npm start

   # Run client
   cd ../client
   npm start
   ```

   The application will run on `http://localhost:3000`.

## 📁 Project Structure

```
Lost-Found-Web/
├── client/             # Frontend (React.js)
│   ├── public/
│   └── src/
├── server/             # Backend (Node.js & Express.js)
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
└── README.md
```

## 📸 Screenshots

*Add screenshots of your application here for better clarity.*

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📬 Contact

DAN – [@ItsMeD4N](https://github.com/ItsMeD4N)
