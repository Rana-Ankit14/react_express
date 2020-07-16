const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {'id': 1 , 'name': 'John Doe'},
        {'id': 2 , 'name': ''},
        {'id': 3 , 'name': 'Jane Doe'}
    ]

    res.json(customers);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server up and running....');
})