import express from 'express';
const app = express();
const Router = express.Router();
Router.get("/login",(req,res)=>{
    res.send("Hello");
});
app.use("/",Router);
app.listen(5000,()=>{console.log("Server started at 5000")});