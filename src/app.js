const express  = require('express');
const path = require('path');
const app =  express();
const hbs = require('hbs');
const port = process.env.PORT || 8000;



//path of public static
const  p = path.join(__dirname, "../public");
const templates_path=path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials");



//We are just telling our app to use hbs views folder
app.set('views engine' , 'hbs');
app.set('views' , templates_path);
hbs.registerPartials(partials_path);



app.use(express.static(p));


//rounting
app.get("/", (req,res) =>{
//res.send("welcome to home page");
res.render("index.hbs");
})
app.get("/about", (req,res) =>{
// res.send("about page main swagat hai ");
res.render('about.hbs');
})
app.get("/weather", (req,res) =>{
	res.render('weather.hbs');
})
app.get("/*", (req,res) =>{
res.render("404er.hbs" , {
	   errorMsg: 'Opps! Page Not Found'
});
})
app.listen(port, ()=>{
	console.log("port is listening");
})