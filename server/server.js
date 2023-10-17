const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello, Worldd!');
});

app.post('/api/submit', (req, res) => {
    const formData = req.body;

    // You can process the formData, save it to a database, etc.

    console.log(formData);

    // Respond to the client
    res.json({ message: 'Form data received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});