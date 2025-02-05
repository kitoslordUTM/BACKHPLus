import express, { urlencoded } from 'express';
import UserRoutes from './routes/user.routes';
import cors from 'cors'
import MedicRoutes from './routes/medic.routes'
import PatientRoutes from './routes/patient.routes';
import morgan from 'morgan';

const expressApp = express();


//midlewares
expressApp.use(morgan('dev'));  
expressApp.use(cors());
expressApp.use(urlencoded({extended: false}));
expressApp.use(express.json());

//routes

expressApp.use('/User', UserRoutes);
expressApp.use('/Medic', MedicRoutes);
expressApp.use('/Patient', PatientRoutes);

export default expressApp;
