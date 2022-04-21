const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')
app.use(cors());
app.use(express.json())

//User: user1
//Pass: NOhZiXKb1NslkRK2


const uri = "mongodb+srv://user1:NOhZiXKb1NslkRK2@cluster0.1mu84.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db('foodExpress').collection('user')
        const user = { name: 'JD', email: 'ayonjd@gmail.com' }
        const result = await userCollection.insertOne(user)
        console.log(`User inserted with : ${result.insertedId}`);
    } finally {
        await client.close()
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("running my ode crud server")
})

app.listen(port, () => {
    console.log('Crud server is running')
})