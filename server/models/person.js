import mongoose from 'mongoose';

const PersonSchema = mongoose.Schema({
    name:String,
    age:Number,
    height:String,
    nationality:String
});

export default mongoose.model('Person',  PersonSchema);