import chai from 'chai';
import chaiHttp = require('chai-http');
import server from '../../../server';

chai.use(chaiHttp);

const { expect } = chai;

const createVehicle = {
  model: 'Impala SupernaTwoRal',
  year: 1969,
  color: 'preto',
  buyValue: 1020000,
  seatsQty: 5,
  doorsQty: 2,
}

describe('Test cars controller', () => {
  const app = server.getApp();

  describe('1.0 - Create method', async () => {
    it('returns with status 201 when the request occurs successfully', () => {
      chai.request(app)
        .post('/cars')
        .send(createVehicle)
        .end((res: Response) => expect(res).to.have.status(201));
    });
  });
});