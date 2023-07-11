const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const PORT = 5000;
app.use(express.json());
app.use(cors());
const users = [];

const userModel = (userName, email, phoneNumber, password) => {
    return { userName, email, phoneNumber, password };
};

app.post("/signup", (req, res) => {
    const fetchedData = users.find(
        (retrievedData) => retrievedData.email === req.body.email
    );

    if (fetchedData) {
        res.status(400).send({ message: "Email already exists!" });
    } else {
        const newUser = userModel(
            req.body.userName,
            req.body.email,
            req.body.phoneNumber,
            req.body.password
        );

        users.push(newUser);

        const token = jwt.sign(
            {
                userName: newUser.userName,
                email: newUser.email,
            },
            "secret_key",
            { expiresIn: "7d" }
        );

        res.status(200).send({
            message: "User has been created successfully",
            token: token,
        });
    }
});

app.post("/login", (req, res) => {
    let fetchedData =
        users[
            users.findIndex(
                (retrivedData) =>
                    retrivedData["email"] === req.body.email &&
                    retrivedData["password"] === req.body.password
            )
        ];

    if (fetchedData) {
        const token = jwt.sign(
            {
                userName: fetchedData.userName,
                email: fetchedData.email,
            },
            "secreact_key",
            { expiresIn: "7d" }
        );
        res.status(200).send({
            message: "Login sucessfully",
            token: token,
        });
    } else {
        res.status(400).send({ message: "User not found" });
    }
});

app.listen(PORT, (error) => {
    if (!error) console.log("Server running listening on port " + PORT);
    else console.log("Error occurred, server can't start", error);
});
