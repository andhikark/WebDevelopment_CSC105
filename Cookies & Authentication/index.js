const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const port = 3000;
const bcrypt = require("bcrypt");

const connection = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "lab_hgnrb",
    password: "stpj1kjWldx3n6Gn",
    database: "lab_todo02_h5xyvh",
});

connection.connect();
console.log("Database is connected");

app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// new register endpoint
app.post("/register", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // password validation
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    if (!isValidPassword) {
        res.json({
            success: false,
            message: "Password does not meet the requirements",
        });
        return;
    }

    // generate hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert new user record
    const sql = mysql.format(
        "INSERT INTO users (username, hashed_password) VALUES (?, ?)",
        [username, hashedPassword]
    );
    connection.query(sql, (err, result) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }
        res.json({
            success: true,
            message: "Registration success",
        });
    });
});

// new login endpoint using the hashed password from the database
app.post("/basic/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const sql = mysql.format(
        "SELECT * FROM users WHERE username = ?",
        [username]
    );
    console.log("DEBUG: /basic/login => " + sql);
    connection.query(sql, async (err, rows) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }

        numUsers = rows.length;
        if (numUsers == 0) {
            res.json({
                success: false,
                message: "User does not exist",
            });
        } else {
            const hashedPassword = rows[0].hashed_password;
            const validPassword = await bcrypt.compare(password, hashedPassword);
            if (validPassword) {
                res.json({
                    success: true,
                    message: "Login credential is correct",
                    user: {
                        username: rows[0].username,
                    },
                });
            } else {
                res.json({
                    success: false,
                    message: "Password is incorrect",
                });
            }
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
