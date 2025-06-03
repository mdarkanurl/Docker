import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Hello from Docker',
        data: {
            name: "Mohammad Arkan",
            email: "mdarkanurl@gmail.com"
        }
    });
});

app.get('/test', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Hello from Docker and it\'s test route',
        data: {
            name: "Jovan Ahmed",
            email: "thejovan@gmail.com"
        }
    });
});

app.listen(3000, () => {
    console.log('App running at port 3000');
});