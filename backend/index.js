const express = require('express');

require('dotenv').config();


const routerRecords = require('./routers/records');

const port = process.env.PORT || 3000;
const app = express();
 


app.use('/api/v1.0/records', routerRecords ); 

app.get('*', (req, res) => res.send('Ciao da antonio a tutti i membri di Skylabs'));

app.listen(port, () => console.log('Server running on port ' + port))
