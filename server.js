const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
    const users = [
        {'id': 1 , 'name': 'John Doe'},
        {'id': 2 , 'name': 'Mary Jane'},
        {'id': 3 , 'name': 'Jane Doe'}
    ]

    res.json(users);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server up and running....');
})