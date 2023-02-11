import {app} from "./app.js"
import dotenv from 'dotenv';
import path from 'path'
let __dirname = path.resolve();

dotenv.config({path:'../config/.env'})
const PORT = process.env.PORT

const server = app.listen(PORT, ()=>{
    console.log(`Servidor HTTP escuchando en el puerto ${process.env.PORT}`);
});
    server.on('error', error=>console.log('Error en servidor', error));