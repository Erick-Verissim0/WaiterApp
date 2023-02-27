import express from 'express';
import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://waiterapp.kj4mf2t.mongodb.net/WaiterApp')
    .then(() => {
        const port = 3001;
        const app = express();

        app.listen(port, () => {
            console.log(`🚀 Server is running in port ${port}`);
        });

        console.log('💻 Connected in MongoDB');

    })
    .catch(() => console.log('❌ Falha ao se conectar ao MongoDB'));


