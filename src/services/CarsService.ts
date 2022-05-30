import { Car, CarSchema } from '../interfaces/CarInterface';
import Service from '.';
import CarModel from '../models/CarsModel';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | null> => {
    const parsed = CarSchema.safeParse(obj);
    if (!parsed.success) {
      return null;
    }

    return this.model.create(obj);
  };
}

const carService = new CarService();

export default carService;
