import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import http from 'node:http';

import { Server } from 'socket.io';
import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb+srv://WaiterApp:wtJHEFFa1EtBNvb9@waiterapp.kj4mf2t.mongodb.net/test')
    .then(() => {
        const port = 3001;

        io.emit('orders@new');

        app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', '*');
            res.setHeader('Access-Control-Allow-Headers', '*');

            next();
        });
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        server.listen(port, () => {
            console.log(`🚀 Server is running in port ${port}`);
        });
        console.log('💻 MongoDB is running');
    })
    .catch((error) => console.log('❌ Error connect in MongoDB, error: ', error));
