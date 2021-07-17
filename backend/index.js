const express = require('express');
const cors = require('cors');

require('dotenv').config();


const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
 

app.use('/api/v1.0/records', require('./routers/records')); 
app.use('/api/v1.0/education_levels', require('./routers/educationLevels') ); 


app.get('*', (req, res) => res.send('Ciao da antonio a tutti i membri di Skylabs'));

app.listen(port, () => console.log('Server running on port ' + port))
