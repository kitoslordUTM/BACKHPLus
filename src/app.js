import express, { urlencoded } from 'express';
import UserRoutes from './routes/user.routes';
import AuthRoutes from './routes/auth.routes'
import cors from 'cors'
import MedicRoutes from './routes/medic.routes'
import PatientRoutes from './routes/patient.routes';
import MeditionRoutes from './routes/userMedition.routes'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

const expressApp = express();


//midlewares
expressApp.use(morgan('dev'));  
expressApp.use(cors());
expressApp.use(helmet());
expressApp.use(cookieParser())
expressApp.use(urlencoded({extended: false}));
expressApp.use(express.json());

//routes

expressApp.use('/User', UserRoutes);
expressApp.use('/Medic', MedicRoutes);
expressApp.use('/Patient', PatientRoutes);
expressApp.use('/Auth', AuthRoutes);
expressApp.use('/Medition', MeditionRoutes);


export default expressApp;
