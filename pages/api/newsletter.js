import { connectDatabase, insertDocument } from "@/helpers/db-util";

export default async function handler(req, res) {
    if(req.method === 'POST'){
        const userEmail = req.body.email;

        if(!userEmail || !userEmail.includes('@')){
            res.status(422).json({message: "Invalid email address."})
            return;
        }

        let client;

        try{
            client = await connectDatabase();
        } catch(error) {
            res.status(500).json({message: "Connecting to the db failed."});
            return;
        }

        try{
            await insertDocument(client, 'email', {email: userEmail}); 
            client.close();
        } catch(error) {
            res.status(500).json({message: "Inserting failed."});
            return;
        }
        
        console.log(userEmail);
        res.status(201).json({message: "Signed up!"})

    }
}