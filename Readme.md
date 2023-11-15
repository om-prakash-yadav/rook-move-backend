# Rook Move Game Backend

## Introduction

Welcome to the Rook Move Game, an exhilarating 1v1 chess-inspired challenge where strategic thinking and quick decision-making are crucial for victory! Engage in this fast-paced game where players maneuver their rook pieces across an 8x8 chessboard, racing to reach the bottom-left corner before their opponent does. Let the battle of wits begin!

## Tech Stack for Backend

- **Node.js:** JavaScript runtime environment
- **Express.js:** Web application framework
- **MongoDB:** NoSQL database (Hosted on MongoDB Atlas for cloud hosting)
- **Socket.io:** Real-time communication library
- **TypeScript:** Programming language with static typing
- **Render:** Hosting on Render

## Installation

#### 1. Clone the repository

```bash
git clone https://github.com/om-prakash-yadav/rook-move-backend.git
```

#### 2. Install the packages

```bash
npm install
```

#### 3. Run the server

```bash
npm start
```

To connect to the MongoDB Atlas database, create a `.env` file in the root directory and add the following line:

```env
MONGO_DB_URL=mongodb+srv://<username>:<password>@<databaseurl>/cuemath?retryWrites=true&w=majority
```

Make sure to replace `<username>`, `<password>`, and `<databaseurl>` with your MongoDB Atlas credentials.