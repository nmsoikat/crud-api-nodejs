const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./configs/db')

const categoryRouter = require('./routes/categoryRouter');
const { notFound, errorHandler } = require('./middlewares/errorHandleMiddleware');

dotenv.config();

const app = express();

connectDB();

app.use(morgan('dev'));

app.use(express.json())

app.use('/api/v1/category', categoryRouter)


app.use('/', (req, res) => {
  res.send('Api is running...!')
})


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 9000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})