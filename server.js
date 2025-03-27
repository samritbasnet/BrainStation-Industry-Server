import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8081;
app.use(cors());


app.listen(PORT,  () => {
    console.log(`Server is listening on PORT ${PORT}`);
  });
  