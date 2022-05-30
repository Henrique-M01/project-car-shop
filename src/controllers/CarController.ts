import { NextFunction, Request, Response } from 'express';
import carService from '../services/CarsService';

export default class CarController {
  public static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { model, year, color, buyValue, seatsQty, doorsQty } = req.body;

      const newCar = {
        model,
        year,
        color,
        buyValue,
        seatsQty,
        doorsQty,
      };

      const created = await carService.create(newCar);

      if (!created) return res.status(400).json({ message: 'Create error' });

      return res.status(201).json(created);
    } catch (error) {
      next(error);
    }
  }

  public static async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const allCars = await carService.read();
      
      return res.status(200).json(allCars);
    } catch (error) {
      next(error);
    }
  }
}