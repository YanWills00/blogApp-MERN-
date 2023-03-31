const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "Blogs"
});

const app = express();

app.listen(2222, "192.168.8.102", () => {
    console.log("listening on port 2222 from 192.168.8.102");
});

app.use(cors());
app.use(express.json());

app.delete('/blogs/:id', (req, res) => {
    req.params;
    console.log(req.params.id);
    db.query("DELETE FROM blogs WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) {
                res.json({ status: "failed", message: "Couldn't delete blog" });
                return;
            } else {
                res.json({ status: "success", message: "Blog Successfully deleted" });
                return;
            }
        }
    )
});

app.get('/blogs', (req, res) => {
    db.query("SELECT * FROM blogs",
        (err, result) => {
            if (err || result.length == 0) {
                if (err) {
                    console.log(err);
                }
                res.json({ status: "failed", message: "No Blogs Available" });
            } else {
                res.json(result);
            }
        }
    );
});

app.post('/blogs', (req, res) => {
    db.query("INSERT INTO blogs(title, body, author) VALUES(?,?,?)",
        [req.body.title, req.body.body, req.body.author],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json({ status: "success", message: "Blog Successfully Added !" });
            }
        });
});

app.get('/blogs/:id', (req, res) => {
    req.params;
    db.query("SELECT * FROM blogs WHERE id=?",
        [req.params.id],
        (err, result) => {
            if (err) {
                res.json({ status: "failed", message: "No Blogs Available" });
                return;
            } else {
                res.json(result[0]);
                return;
            }
        }
    );
});