import database from '../src/models';

class FunctionalPositionService {
  static async getAllFunctionalPositions() {
    try {
      return await database.FunctionalPosition.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addFunctionalPosition(newFunctionalPosition) {
    try {
      return await database.FunctionalPosition.create(newFunctionalPosition);
    } catch (error) {
      throw error;
    }
  }

  static async updateFunctionalPosition(id, updateFunctionalPosition) {
    try {
      const FunctionalPositionToUpdate = await database.FunctionalPosition.findOne({
        where: { id: Number(id) }
      });

      if (FunctionalPositionToUpdate) {
        await database.FunctionalPosition.update(updateFunctionalPosition, { where: { id: Number(id) } });

        return updateFunctionalPosition;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAFunctionalPosition(id) {
    try {
      const theFunctionalPosition = await database.FunctionalPosition.findOne({
        where: { id: Number(id) }
      });

      return theFunctionalPosition;
    } catch (error) {
      throw error;
    }
  }

  static async deleteFunctionalPosition(id) {
    try {
      const FunctionalPositionToDelete = await database.FunctionalPosition.findOne({ where: { id: Number(id) } });

      if (FunctionalPositionToDelete) {
        const deletedFunctionalPosition = await database.FunctionalPosition.destroy({
          where: { id: Number(id) }
        });
        return deletedFunctionalPosition;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default FunctionalPositionService;