const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

let messages = []; // メモリ上にメッセージを保存（実際にはデータベースを使用することをお勧めします）

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/messages', (req, res) => {
    const message = req.body.message;
    if (message) {
        messages.push(message);
        res.status(201).json({ message: 'Message added' });
    } else {
        res.status(400).json({ error: 'Message is required' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
