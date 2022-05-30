import { Router } from 'express';
import CarController from '../controllers/CarController';

export default class CarRouter {
  public router: Router = Router();

  private create() {
    this.router.post('/cars', CarController.create);
  }

  private getAll() {
    this.router.get('/cars', () => console.log('get'));
  }

  constructor() {
    this.create();
    this.getAll();
  }
}
