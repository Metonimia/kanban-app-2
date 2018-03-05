import { Router } from 'express';
import * as LaneController from '../controllers/Lane.controller';

const router = new Router();

router.route('/lanes').get(LaneController.getLanes);
router.route('/lanes').post(LaneController.addLane);
router.route('/lanes/:laneId').delete(LaneController.deleteLane);
router.route('/lanes/:laneId').put(LaneController.editLaneName);


export default router;