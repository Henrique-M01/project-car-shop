// import CustomRouter from './routes/Router';
import App from './app';
import CarRouter from './routes/CarRouter';

// import exampleController from './controllers/controller-example';

// import { example } from './interfaces/ExampleInterface';

const server = new App();

const carRouter = new CarRouter();

server.addRouter(carRouter.router);

// const exampleController = new exampleController();

// const exampleRouter = new CustomRouter<Car>();
// exampleRouter.addRoute(exampleController);

// server.addRouter(exampleRouter.router);

export default server;
