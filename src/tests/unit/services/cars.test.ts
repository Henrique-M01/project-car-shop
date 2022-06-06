import chai = require('chai');
import Sinon = require('sinon');
import CarModel from '../../../models/CarsModel';
import { CarService } from '../../../services/CarsService';


interface ICar {
  model: string,
  year: number,
  color: string,  
  status?: boolean,
  buyValue: number,
  doorsQty:number,
  seatsQty: number,
} 


const carsModel = new CarModel();
const carsService = new CarService(carsModel);

const carMock = {
  "model": "Ferrari Maranello",
	"year": 1963,
	"color": "red",
	"buyValue": 3500000,
  "doorsQty": 2,
	"seatsQty": 2,
	"_id": "628e564936a8a8cc4224bb14"
}

const carsMock = [carMock];

const { expect } = chai;

describe('Rota /api/cars', () => {
  describe('01 Consulta a lista de carros', () => {

    before(() => Sinon.stub(carsModel, 'read').resolves(carsMock as ICar[]));

    after(() => {
      (carsModel.read as Sinon.SinonStub).restore();
    })

    it(
      'A requisição GET para a rota traz uma lista inicial ' +
      'contendo o registro de carros',
      async () => {
        const cars = await carsService.read() 
        expect(cars).to.deep.eq(carsMock);
      }
    );
  });

  describe('02 Cria um novo carro', () => {

    before(() => Sinon.stub(carsModel, 'create').resolves(carMock as ICar));

    after(() => {
      (carsModel.create as Sinon.SinonStub).restore();
    })

    it(
      'ao criar um novo carro ele retorna o carro criado',
      async () => {
        const cars = await carsService.create(carMock); 
        expect(cars).to.deep.eq(carMock);
      }
    );
  });
}); 