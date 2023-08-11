import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
//my selected port
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.get("/newspaper", (req, res) => {
    //res.render("index.ejs");
});
app.get("/about-me", (req, res) => {
    res.render("about-me.ejs");
});
app.get("/archive", (req, res) => {
    res.render("archive.ejs");
});
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});
app.get("/cv", (req, res) => {
    res.render("cv.ejs");
});
app.get("/history", (req, res) => {
    res.render("history.ejs");
});
app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});

app.get("/dicee", (req, res) => {
    res.render("../projects/diceeGame/dicee.ejs");
});
app.get("/drumkit", (req, res) => {
    res.render("../projects/drumKit/index.ejs");
});
app.get("/library", (req, res) => {
    res.render("../projects/libraryApp/index.ejs");
});
app.get("/qrGenerator", (req, res) => {
    res.render("../projects/qrGenerator/index.ejs");
});
app.get("/thesimongame", (req, res) => {
    res.render("../projects/theSimonGame/index.ejs");
});




app.listen(port, () => {
    console.log(`Server started on ${port}`);
});