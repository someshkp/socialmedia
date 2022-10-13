import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from './Routers/AuthRoute.js'
import UserRoute from './Routers/UserRoute.js'
import PostRoute from './Routers/PostRoute.js'
import UploadRoute from './Routers/UploadRoute.js'

const app = express();
//image folder to public
app.use(express.static('public'));
app.use('/images',express.static("images"));




app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);
app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`)))
  .catch((err) => console.log(err));

 // usage of route
  app.use('/auth',AuthRoute);
  app.use('/user',UserRoute);
  app.use('/post',PostRoute);
  app.use('/upload',UploadRoute);
