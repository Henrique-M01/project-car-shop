export interface Vehicle {
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
}

// import { z } from 'zod';

// const VehicleSchema = z.object({
//   model: z.string().min(3, {
//     message: 'Models name must be 3 or more characters long' }),
//   year: z.date(),
//   color: z.string().min(3, {
//     message: 'Color must be 3 or more characters long' }),
//   status: z.boolean().optional(),
//   buyValue: z.number().int(),
// });

// type Vehicle = z.infer<typeof VehicleSchema>;

// export default Vehicle;
// export { VehicleSchema }; 
// Porque isso nao passa no teste????