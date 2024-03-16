import user from './routes/user.js'
import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user',user);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
