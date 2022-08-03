import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        try {
            const client = await MongoClient.connect('mongodb+srv://Admin:kKUpshs2YIC3pwW4@clarkedb.1jhyb.mongodb.net/users?retryWrites=true&w=majority');
            const db = client.db();
            const users = db.collection('users');
            const user =  await users.findOne(data);
            if (user !== null) {
                console.log(user);
                res.status(200).json({ session_id: "test123"});
            } else {
                console.log("User doesn't exist");
                res.status(200).json({ response:"User not found" });
            }
            client.close();
        } catch (err) {
            console.error(err);
            res.status(500).json({ response:"Error fetching user" });
        }
    }
}