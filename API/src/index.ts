import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';

import { router } from './router';

mongoose.connect('mongodb+srv://WaiterApp:wtJHEFFa1EtBNvb9@waiterapp.kj4mf2t.mongodb.net/test')
    .then(() => {
        const app = express();
        const port = 3001;

        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`🚀 Server is running in port ${port}`);
        });
        console.log('💻 MongoDB is running');
    })
    .catch((error) => console.log('❌ Error connect in MongoDB, error: ', error));


