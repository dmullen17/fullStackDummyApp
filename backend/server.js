const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
const router = express.Router();

app.get('/', (req, res) => {
    res.json({hi: 'hello there'});
})

router.get('/getData', (req, res) => {
    // Imitate a call to a database - return some dummy data.
    res.json({name: 'Dom', age: 27, skills: 'programming'});
}); 

router.get('/newEndpoint', (req, res) => {
   // Return a different set of dummy data 
    res.json({name: 'Dom', age: 27, skills: 'Basketball'});
});

// Set our route handlers on the /api endpoint
app.use('/api', router);

// Start the app
app.listen(port, () => console.log(`Listening on port: ${port}`));