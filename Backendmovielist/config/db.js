const mongoose = require ('mongoose')


const connectdb=async ()=>{

    try{
       await mongoose.connect('mongodb+srv://myAtlasDBUser:MbHEs6hxCQ3WOmbd@myatlasclusteredu.gzsz2ji.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU')
        console.log('you are connected')
    }
    catch(err){
        console.log(err)
    }
}
module.exports =  connectdb