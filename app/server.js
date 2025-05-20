const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send('SIT737 task 10.1p');
});
 
app.listen(3010, () => {
    console.log('Server running at http://localhost:3010');
});