import { Request, Response } from "express";
import Game from "../models/Game";
import { Types } from "mongoose";

class CreateAGameController {
  public async createNewGame(req: Request, res: Response): Promise<void> {
    try {
      const { playerName, socketId, opponentId } = req.body; // Add opponentId to the request body
      console.log(playerName, socketId);

      if (!playerName || !socketId) {
        res.status(400).json({ error: "Playername or SocketId missing in request" });
        return;
      }

      const newGame = new Game({
        players: [
          {
            playerName,
            socketId,
          },
          {
            playerName: "", // Set opponent's name to an empty string initially
            socketId: opponentId, // Use the provided opponentId
          },
        ],
        gameState: {
          isGameStarted: false,
          isGameCompleted: false,
        },
      });

      await newGame.save();

      res.status(200).json({ message: "Game created successfully", game: newGame });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  public async getAvailablePlayers(req: Request, res: Response): Promise<void> {
    try {
      const availablePlayers = await Game.find({
        "gameState.isGameStarted": false,
        $expr: { $eq: [{ $size: "$players" }, 1] },
      }).select("players");

      res.status(200).json({ message: "Available players", players: availablePlayers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  public async checkGameExists(req: Request, res: Response): Promise<void> {
    try {
      const { gameId } = req.body;
      const game = await Game.findOne({
        _id: new Types.ObjectId(gameId),
      });
      if (!game) {
        res.status(404).json({ error: "Game not found, check game id or create a new game" });
        return;
      }
      if (game.gameState.isGameStarted || game.players.length == 2) {
        res.status(400).json({ error: "Game already started" });
        return;
      }
      res.status(200).json({ message: "Game found", game });
    } catch (error) {
      console.error(error);
      if (`${error}`.includes("BSONError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer")) {
        res.status(404).json({ error: "Game not found, check game id or create a new game" });
      }
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new CreateAGameController();
