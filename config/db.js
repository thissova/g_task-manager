import mongoose from 'mongoose';
const URI =
  'mongodb+srv://ivan22dev_db_user:AFxHgd7IRGNSlBgL@cluster0.ul5zid5.mongodb.net/?appName=Cluster0';

mongoose
  .connect(URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.error(e);
  });
