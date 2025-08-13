# EchoMeet - Video Conferencing Application

A full-stack video conferencing application built with React.js frontend and Node.js backend, featuring real-time video calls, chat messaging, user authentication, and meeting history.

## 🚀 Features

### Core Features
- **Real-time Video Calling** - WebRTC-based peer-to-peer video communication
- **Audio/Video Controls** - Toggle camera and microphone during calls
- **Screen Sharing** - Share your screen with other participants
- **Live Chat** - Real-time messaging during video calls
- **User Authentication** - Secure login and registration system
- **Meeting History** - Track and view past meetings
- **Guest Access** - Join meetings without registration

### Technical Features
- **Socket.IO Integration** - Real-time bidirectional communication
- **WebRTC Implementation** - Direct peer-to-peer connections
- **Responsive Design** - Modern UI with Material-UI components
- **Security** - Password hashing, rate limiting, CORS protection
- **Database Integration** - MongoDB for user and meeting data

## 🏗️ Project Structure

```
VideoConf/
├── backend/                 # Node.js Express server
│   ├── src/
│   │   ├── controllers/     # Business logic
│   │   │   ├── socketManager.js    # Socket.IO connection handling
│   │   │   └── user.controller.js  # User authentication & history
│   │   ├── models/          # MongoDB schemas
│   │   │   ├── user.model.js       # User data model
│   │   │   └── meeting.model.js    # Meeting data model
│   │   ├── routes/          # API endpoints
│   │   │   └── users.routes.js     # User-related routes
│   │   └── app.js           # Main server configuration
│   ├── package.json         # Backend dependencies
│   └── .env                 # Environment variables
└── frontend/                # React.js client
    ├── src/
    │   ├── pages/           # React components/pages
    │   │   ├── Landing.jsx         # Landing page
    │   │   ├── Authentication.jsx  # Login/Register page
    │   │   ├── home.jsx           # Dashboard/Home page
    │   │   ├── VideoMeet.jsx      # Video call interface
    │   │   └── history.jsx        # Meeting history
    │   ├── contexts/        # React context providers
    │   │   └── AuthContext.jsx    # Authentication state management
    │   ├── utils/           # Utility functions
    │   │   └── withAuth.js        # Authentication HOC
    │   ├── styles/          # CSS modules
    │   └── App.js           # Main app component
    └── package.json         # Frontend dependencies
```

## 🛠️ Technology Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.IO** - Real-time communication
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **bcrypt** - Password hashing
- **helmet** - Security middleware
- **cors** - Cross-origin resource sharing
- **express-rate-limit** - Rate limiting

### Frontend
- **React.js** - UI framework
- **React Router** - Client-side routing
- **Material-UI** - Component library
- **Socket.IO Client** - Real-time communication
- **Axios** - HTTP client
- **WebRTC** - Peer-to-peer video/audio

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** database
- Modern web browser with WebRTC support

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd VideoConf
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=mongodb://localhost:27017/videoconf
PORT=8000
FRONTEND_URL=http://localhost:3000
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

### 4. Start the Application

**Start Backend Server:**
```bash
cd backend
npm run dev
```
Server will run on `http://localhost:8000`

**Start Frontend Application:**
```bash
cd frontend
npm start
```
Application will run on `http://localhost:3000`

## 🎯 Usage

### Getting Started
1. **Landing Page** - Visit the homepage to see available options
2. **Register/Login** - Create an account or sign in
3. **Dashboard** - Access meeting controls and history
4. **Join Meeting** - Enter a meeting code or create a new meeting
5. **Video Call** - Enjoy real-time video communication with controls

### Meeting Features
- **Camera Toggle** - Turn video on/off
- **Microphone Toggle** - Mute/unmute audio
- **Screen Share** - Share your screen with participants
- **Chat** - Send messages during the call
- **Leave Call** - End the meeting

## 🔧 API Endpoints

### User Authentication
- `POST /api/v1/users/register` - Register new user
- `POST /api/v1/users/login` - User login
- `POST /api/v1/users/history` - Add meeting to history
- `GET /api/v1/users/history` - Get user meeting history

## 🔌 Socket Events

### Client to Server
- `join-call` - Join a meeting room
- `signal` - WebRTC signaling data
- `chat-message` - Send chat message
- `disconnect` - Leave meeting

### Server to Client
- `user-joined` - New user joined the meeting
- `user-left` - User left the meeting
- `signal` - WebRTC signaling data
- `chat-message` - Receive chat message

## 🚀 Deployment

### Live Application
🌐 **The complete application is deployed and accessible at:**
https://videocallingproject-1.onrender.com/

## 🔒 Security Features

- **Password Hashing** - bcrypt for secure password storage
- **Rate Limiting** - Prevent API abuse
- **CORS Protection** - Controlled cross-origin requests
- **Helmet** - Security headers
- **Token-based Authentication** - Secure session management

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

**Note**: WebRTC features require HTTPS in production environments.



## 👨‍💻 Author

**Ankit** - Project Developer

## 🐛 Known Issues

- Ensure microphone and camera permissions are granted
- HTTPS required for production WebRTC functionality
- Some browsers may require additional WebRTC configuration

## 📞 Support

For support and questions, please open an issue in the repository.

---

**EchoMeet** - Connecting people through seamless video communication 🎥✨
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |

