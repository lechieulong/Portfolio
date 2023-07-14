import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import postRoutes from './routes/posts.js'

//Buoc 1  Connect to database here
const app = express();
dotenv.config();

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use('/posts', postRoutes);


// const CONNECTION_URL= 'mongodb+srv://lechieulong:lel13012002@cluster0.fevr2fc.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () =>  console.log(`Sever running on port:  ${PORT}
    successs`)))
    .catch((error) => console.error(error.message))


