import mongoose from "mongoose";

export default function connect(){
    try {
        mongoose.connect(process.env.DB_URL!)
        const connection  = mongoose.connection;

        connection.on('connected',()=>{
            console.log("DB connected successfully")
        })

        connection.on('error',(err)=>{
            console.log('Mongo DB Error with connection',err)
            process.exit();
        })
    } catch (error:any) {
        console.log("Something went wrong")
        console.log(error.message)
    }
}