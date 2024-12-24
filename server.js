const mongoose = require("mongoose");

let connectToMDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://saimadhava:sai1611@saicluster2409.4vnn2.mongodb.net/?retryWrites=true&w=majority&appName=saicluster2409");
        console.log("Successfully connected to mongoDB")
    } catch (error) {
        console.log("unable to connect to mongoDB");
    }
   
};

connectToMDB();