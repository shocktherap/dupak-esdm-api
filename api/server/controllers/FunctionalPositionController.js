import FunctionalPositionService from '../services/FunctionalPositionService';
import Util from '../utils/Utils';

const util = new Util();

class FunctionalPositionController {
  static async getAllFunctionalPositions(req, res) {
    try {
      const allFunctionalPositions = await FunctionalPositionService.getAllFunctionalPositions();
      if (allFunctionalPositions.length > 0) {
        util.setSuccess(200, 'FunctionalPositions retrieved', allFunctionalPositions);
      } else {
        util.setSuccess(200, 'No FunctionalPosition found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addFunctionalPosition(req, res) {
    if (!req.body.name || !req.body.first_semester_lock || !req.body.second_semester_lock) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newFunctionalPosition = req.body;
    try {
      const createdFunctionalPosition = await FunctionalPositionService.addFunctionalPosition(newFunctionalPosition);
      util.setSuccess(201, 'FunctionalPosition Added!', createdFunctionalPosition);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedFunctionalPosition(req, res) {
    const alteredFunctionalPosition = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateFunctionalPosition = await FunctionalPositionService.updateFunctionalPosition(id, alteredFunctionalPosition);
      if (!updateFunctionalPosition) {
        util.setError(404, `Cannot find FunctionalPosition with the id: ${id}`);
      } else {
        util.setSuccess(200, 'FunctionalPosition updated', updateFunctionalPosition);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAFunctionalPosition(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theFunctionalPosition = await FunctionalPositionService.getAFunctionalPosition(id);

      if (!theFunctionalPosition) {
        util.setError(404, `Cannot find FunctionalPosition with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found FunctionalPosition', theFunctionalPosition);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteFunctionalPosition(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const FunctionalPositionToDelete = await FunctionalPositionService.deleteFunctionalPosition(id);

      if (FunctionalPositionToDelete) {
        util.setSuccess(200, 'FunctionalPosition deleted', {id: id});
      } else {
        util.setError(404, `FunctionalPosition with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default FunctionalPositionController;