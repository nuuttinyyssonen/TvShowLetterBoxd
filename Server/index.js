const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require('cors');
const port = 5000
const { MONGODB_URI } = require('./utils/config');

const loginRouter = require('./Controls/login');
const signupRouter = require('./Controls/signup');

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);
const connectMongoDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}
connectMongoDB();

app.use('/api/login', loginRouter);
app.use('/api/signup', signupRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});