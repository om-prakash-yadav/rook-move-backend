import mongoose, { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from 'uuid';

export interface IPlayer {
  playerName: string;
  socketId: string;
}

interface IGameState {
  isGameStarted: boolean;
  isGameCompleted: boolean;
  gameStartTime?: Date;
  winnerId?: string;
  winner?: string;
  reason?: string;
}

export interface IGame extends Document {
  players: IPlayer[];
  gameState: IGameState;
}

const gameSchema = new Schema<IGame>(
  {
    players: [
      {
        playerName: {
          type: String,
          required: true,
        },
        socketId: {
          type: String,
          required: true,
        },
      },
    ],
    gameState: {
      isGameStarted: {
        type: Boolean,
        required: true,
        default: false,
      },
      isGameCompleted: {
        type: Boolean,
        required: true,
        default: false,
      },
      turn: {
        type: String,
        default: "X",
      },
      gameStartTime: {
        type: Date,
      },
      winnerId: {
        type: String,
      },
      winner: {
        type: String,
      },
      reason: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model<IGame>("Game", gameSchema);

export default Game;
