import express from "express";
import session from "express-session"
import expressLayouts from "express-ejs-layouts";
const app = express();
app.set("view engine","ejs");
app.set("views","views");
app.use(expressLayouts);
app.listen(8080,()=>{console.log("Server started at 8080")});
app.use(express.urlencoded({extended:true}));
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true
    }
    )
)
let users = [{id: 1, username: "shetty", email: "shetty@gmail.com", password: "password123"},
{id: 2, username: "kannu", email: "kannu@gmail.com", password: "password456"},
{id: 3, username: "somu", email: "somu@gmail.com", password: "password789"}];

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login",(req,res)=>{
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        req.session.user = user;//session id gets created 
        res.redirect("/");
    }
    else{
        res.render("login", { error: "Invalid email or password" });
    }
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register",(req,res)=>{
    const { username, email, password } = req.body;
    const newUser = { id: users.length + 1, username, email, password };
    users.push(newUser);
    res.redirect("/login");
});

app.get("/",(req,res)=>{
    if(req.session.user){
        res.render("dashboard", { users });
    }
    else{
        res.redirect("/login");
    }
});