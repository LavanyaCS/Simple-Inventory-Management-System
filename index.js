const express = require("express");
require("dotenv").config();
const itemRoutes = require("./routes/ItemRoutes");
const userRoutes = require("./routes/UserRoutes");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});
app.use(itemRoutes);
app.use(userRoutes);

//Heath Check up
app.get('/',(req,res) => {
   res.send("Inventory API is Running");
})
app.get('/health',(req,res) => {
    res.status(200).json({message:"OK,API is healthy"});
})
//Middleware check - Refered in Google 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const port = process.env.port;
app.listen(port,() => {
    console.log(`Server is running on port - ${port}`);
})