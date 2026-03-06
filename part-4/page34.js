import express from "express";
const app = express();
app.set("view engine","ejs");
app.set("views","views");
app.listen(8080,()=>{console.log("Server started at 8080")});
app.use(express.urlencoded({extended:true}));
const users = [{id: 1, username: "shetty", email: "shetty@gmail.com", password: "password123"},
{id: 2, username: "kannu", email: "kannu@gmail.com", password: "password456"},
{id: 3, username: "somu", email: "somu@gmail.com", password: "password789"}];

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",(req,res)=>{
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.redirect("/");
    }
    else{
        res.redirect("/login");
    }
    res.redirect("/");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/",(req,res)=>{
    res.render("dashboard", { users });
});