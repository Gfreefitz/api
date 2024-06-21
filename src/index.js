const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(cors());
app.use(express.json());

// /hello endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! Welcome to the Danger zone!!!' });
});

// /time endpoint
app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ currentTime });
});


// /games
app.get('/games', (req,res) => {
    const gameWow = "World of Warcraft - Wowhead";
    res.json({ message: 'https://www.wowhead.com/classic/guide/season-of-discovery/classes/priest/healer-bis-gear-pve'});
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
