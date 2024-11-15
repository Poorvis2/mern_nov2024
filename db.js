const mongoose=require("mongoose");
const url="mongodb://localhost:27017/trainer";
const userSchema=new mongoose.Schema({
    name:String,
    age:Number
});
const User=mongoose.model('user',userSchema);
async function main(){
    try{
        await mongoose.connect(url,{userNewUrlParser:true,userUnifiedTopology:true});
        console.log('connected to mongodb');
        //first user
        const user1=new User({name:"alice",age:20});
        await user.save();
        console.log("user saved:",user);
        const usert= await User.find({});
        console.log("Found users:",users);
        //Second User
        const users=new User({name:"alice",age:20});
        await user.save();
        console.log("user saved:",user);
        const user2= await User.find({});
        console.log("Found users:",users);
        //Third User
        const user3=new User({name:"alice",age:20});
        await user.save();
        console.log("user saved:",user);
        const user= await User.find({});
        console.log("Found users:",users);

     
    }
}