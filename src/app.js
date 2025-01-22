import express, { urlencoded } from 'express';
import UserRoutes from './routes/user.routes';
import MedicRoutes from './routes/medic.routes'
import morgan from 'morgan';

const expressApp = express();


//midlewares
expressApp.use(morgan('dev'));  
expressApp.use(urlencoded({extended: false}));
expressApp.use(express.json());

//routes

expressApp.use('/User', UserRoutes);
expressApp.use('/Medic', MedicRoutes);

export default expressApp;
