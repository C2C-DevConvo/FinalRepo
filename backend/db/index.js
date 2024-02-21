import mongoose from 'mongoose';
import Registration from '../models/registrations.models.js'


const connectDB = async (new_entry) => {

    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://admin:GFidtnZiHCQ7b46J@cluster0.2isyv0j.mongodb.net/DevConvo`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        // const new_entry = new Registration({
        //     name: 'John Doe',
        //     number: 1234567890,
        //     mail: 'john.doe@example.com',
        //     city: 'Some City',
        //     organization: 'Some Organization',
        //     designation: 'Some Designation',
        //     linkedin: 'https://www.linkedin.com/in/johndoe',
        //     twitter: 'https://twitter.com/johndoe'
        // });

        await Registration.create(new_entry);
        
        
    }
    catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);
    }
}

export default connectDB;




