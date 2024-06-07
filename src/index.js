const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

// /hello endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// /time endpoint
app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ currentTime });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
