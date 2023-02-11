import express from 'express';
import  cors  from 'cors';
import { cardsRouter } from './routes/routes.js';
export const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/card', cardsRouter);