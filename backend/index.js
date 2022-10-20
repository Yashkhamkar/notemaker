// creating backend in mern
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const app = express();
dotenv.config()
app.use(express.json());
app.use(express.urlencoded())
const port = process.env.PORT
app.listen(port, () => { console.log(`server running on port ${port}`) })
app.use(cors());
connectDB();
