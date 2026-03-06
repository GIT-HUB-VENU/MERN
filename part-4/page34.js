import express from "express";
const app = express();
app.set("view engine","ejs");
app.set("views","views");
app.listen(8080,()=>{console.log("Server started at 8080")});

const users = [{id: 1, username: "shetty", email: "shetty@gmail.com", password: "password123"},
{id: 2, username: "kannu", email: "kannu@gmail.com", password: "password456"},
{id: 3, username: "somu", email: "somu@gmail.com", password: "password789"}];

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/",(req,res)=>{
    res.render("dashboard", { users });
});