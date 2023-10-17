const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;;

const DATA_PATH = path.join(__dirname, './data/guests.json');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


const readData = () => {
    try {
        const rawData = fs.readFileSync(DATA_PATH, 'utf-8');

        return JSON.parse(rawData);
    } catch (error) {
        throw new Error('Failed to read data file.');
    }

};

const writeData = (data) => {
    try {
        fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        throw new Error('Failed to write to data file.');
    }
};

app.get('/api/get-data', (req, res) => {
    try {
        const dataFile = readData();
        res.json(dataFile);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.post('/api/submit', (req, res) => {
    const newData = req.body;
    
    try {
        const dataFile = readData();
        dataFile.push(newData);
        writeData(dataFile);
        
        res.json({ message: 'RSVP submitted successfully.', data: dataFile });
    } catch (err) {
        console.error('Error processing RSVP:', err);
        res.status(500).json({ message: 'Server error.' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});