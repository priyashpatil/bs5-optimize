const express = require('express');
const compression = require('compression');

const app = express();

const port = 3000; // You can change this to any port you prefer

// Serve static files from the 'public' directory
app.use(compression());
app.use(express.static('dist'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
