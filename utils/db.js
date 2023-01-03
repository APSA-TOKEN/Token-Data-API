import { ObjectId } from 'mongodb+srv://Apsat:FireGate001@cluster0.0cgout6.mongodb.net/?retryWrites=true&w=majority'
import { MongoClient } from 'https://cloud.mongodb.com/v2/63b3e2b55e444c4a9631566e#/clusters'


const initializeClient = () => {
    try {
        const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.it21v.mongodb.net/fomo?retryWrites=true&w=majority`
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true  })
        client.connect()
        const getClient = () => client
        return {client, getClient}
    }
    catch(err) {
        console.log(err)
    }
}

const { client, getClient } = initializeClient()

 
updateprojectOneData = async (chainData, client) => {
    try {
        const database = client.db('fomo')
        const collection = database.collection('projectOne')
        chainData.timestamp = Date.now()
        let newChainData = Object.assign({}, chainData)
        newChainData._id = ObjectId()
        let deleteResult = await collection.deleteMany( { timestamp : {"$lt" : Date.now() - 60 * 1000 }}) 
        console.log(`Deleted: ${deleteResult.deletedCount}`)
        await collection.insertOne(newChainData)
        console.log("Inserted new entries")
    } 
    catch(err) {
        console.log(err)
    }
}


updateprojectTwoData = async (chainData, client) => {
    try {
        const database = client.db('fomo')
        const collection = database.collection('projectTwo')
        chainData.timestamp = Date.now()
        let newChainData = Object.assign({}, chainData)
        newChainData._id = ObjectId()
        let deleteResult = await collection.deleteMany( { timestamp : {"$lt" : Date.now() - 60 * 1000 }}) 
        console.log(`Deleted: ${deleteResult.deletedCount}`)
        await collection.insertOne(newChainData)
        console.log("Inserted new entries")
    } 
    catch(err) {
        console.log(err)
    }
}

getCachedprojectOneData = async (client) => {
    try {
        const database = client.db('fomo')
        const collection = database.collection('projectOne')
        cachedData = await collection.find().sort({ _id: -1 }).limit(1).toArray()
        cachedData = cachedData[0]
        return cachedData    
    } 
    catch(err) {
        console.log(err)
    }
}


getCachedprojectTwoData = async (client) => {
    try {
        const database = client.db('fomo')
        const collection = database.collection('projectTwo')
        cachedData = await collection.find().sort({ _id: -1 }).limit(1).toArray()
        cachedData = cachedData[0]
        return cachedData    
    } 
    catch(err) {
        console.log(err)
    }
}


export default {
    getClient,
    updateprojectOneData,
    getCachedprojectOneData,
    updateprojectTwoData,
    getCachedprojectTwoData
}

