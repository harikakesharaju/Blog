const express=require("express")
const mongoose=require('mongoose')
const cors=require('cors')
const brouter=require('./routes/Blog')
const urouter=require('./routes/User')


const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/user",urouter);
app.use("/api/blog",brouter);

mongoose.connect('mongodb://127.0.0.1:27017/Blogapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  app.listen(5001, () => {
    console.log("Server is running on port 5001");
  });
  console.log("MongoDB connected successfully");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});
