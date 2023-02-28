import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose.connect('mongodb+srv://waiterapp.kj4mf2t.mongodb.net/WaiterApp')
    .then((
    ) => {
        const app = express();
        const port = 3001;

        app.use(express.json());
        app.use(router);

        app.listen(port, () => {
            console.log(`🚀 Server is running in port ${port}`);
        });

        console.log('💻 MongoDB is running');

    })
    .catch((error) => console.log('❌ Error connect in MongoDB, error: ', error));


