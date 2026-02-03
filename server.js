import bodyParser from 'body-parser';
import express from 'express';
import './config/db.js';

// Routes
import authRouter from './routes/authRoutes.js';
import taskRouter from './routes/taskRoutes.js';

const app = express();
const port = 3000;

// middleware
app.use(bodyParser.json());

app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, () => {
  console.log(
    `Server is listening on port ${port} and starting at http://localhost:${port}`
  );
});
