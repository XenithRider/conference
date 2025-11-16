import mongoose from "mongoose" ;

export default async function connectToDB(){
    try{
        await mongoose.connect("mogodb connection");
        console.log("Database connected sucessfully");
    }
    catch(e){
        console.log(e);
    }
    
}