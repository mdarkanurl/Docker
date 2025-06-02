import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Hello from Docker'
    });
});

app.listen(3000, () => {
    console.log('App running at port 3000');
});