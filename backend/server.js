const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const searchRoutes = require('./routes/search');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', searchRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
