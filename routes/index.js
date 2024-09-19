const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Ben Davis');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Started at port ' + (process.env.PORT || 3000))
})