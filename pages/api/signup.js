import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method == 'POST') {
        const data = req.body;
        try {
            const client = await MongoClient.connect('mongodb+srv://Admin:kKUpshs2YIC3pwW4@clarkedb.1jhyb.mongodb.net/users?retryWrites=true&w=majority');
            const db = client.db();
            const users = db.collection('users');
            const result = await users.insertOne(data);
            console.log(result);
            client.close();
            res.status(200).json({ response:"New User Created" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ response:"Error creating user" });
        }
    }
}