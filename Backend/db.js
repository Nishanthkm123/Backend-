const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/trainer";

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

async function main() {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        
        // Example users
        const users = [
            { name: "Alice", age: 20 },
            { name: "Emily", age: 25 },
            { name: "John", age: 30 }
        ];
        
        // Save each user
        for (const userData of users) {
            const user = new User(userData);
            await user.save();
        }

        console.log('Users saved to MongoDB');
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.connection.close();
    }
}

main();
