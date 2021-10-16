const mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/peopledb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

     .then(()=>console.log('Database connection stablished'))
     .catch(err=>console.log('There was an error', err))