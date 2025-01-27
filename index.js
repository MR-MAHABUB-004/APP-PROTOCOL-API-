const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/status', (req, res) => {
    fs.readFile('status.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading status file');
        }
        const statuses = JSON.parse(data);
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        res.json(randomStatus);
    });
});

app.listen(port, () => {
    console.log(`Status API listening at http://localhost:${port}`);
});
