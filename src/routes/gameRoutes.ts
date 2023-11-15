import express from 'express';
import gameController from '../controllers/gameController';


const router = express.Router();

router.post('/createNewGame', gameController.createNewGame);
router.post('/gameExists', gameController.checkGameExists);
router.get("/getAvailablePlayers", gameController.getAvailablePlayers);

export default router
