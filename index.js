import user from './routes/user.js';
import login from './routes/login.js';
import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user',user);
app.use('/login',login);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
