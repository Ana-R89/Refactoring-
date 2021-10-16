 const express = require('express');
 const cors = require('cors');
 const app = express();

 require('./server/config/mongoose.config');

 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({ extended: true}))

 require('./server/routes/person.routes')(app); //this is new

 app.listen(8000, () => {
       console.log("you are now listening at port 8000");
 })


