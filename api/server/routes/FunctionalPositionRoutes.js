import { Router } from 'express';
import FunctionalPositionController from '../controllers/FunctionalPositionController';

const router = Router();

router.get('/', FunctionalPositionController.getAllFunctionalPositions);
router.post('/', FunctionalPositionController.addFunctionalPosition);
router.get('/:id', FunctionalPositionController.getAFunctionalPosition);
router.put('/:id', FunctionalPositionController.updatedFunctionalPosition);
router.delete('/:id', FunctionalPositionController.deleteFunctionalPosition);

export default router;