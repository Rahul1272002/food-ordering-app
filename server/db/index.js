const mongosse=require('mongoose');
mongosse.connect('mongodb://localhost:27017/food-ordering',{useNewUrlParser:true})
.catch(e=>{
    console.error('Connection error', e.message)
})
const db=mongosse.connection
module.exports = db
