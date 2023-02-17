const express = require('express');

const app = express();
app.use((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.json({ 
        status: 1,
        message: 'success',
        data:['Apple', 'Orange', 'Banana', 'Pineapple', 'Pear']    
    }); 
 });


module.exports = app;

