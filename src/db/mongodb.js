//File having the implementation of CRUD operations using Mongo Node Native Driver API

//CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!');
    }

    console.log('Connected Successfully');
    const db = client.db(databaseName);

    //DELTEING
    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    //UPDATING
    db.collection('users').updateOne({ _id: new ObjectID('5ee0ee5ffa58f247603618b6') }, {
        $set: {
            name: 'Baskar'
        },
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    db.collection('tasks').updateMany({ completed: false }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    // READING
    db.collection('users').findOne({ name: 'Sasi' }, (error, user) => {
        if (error) {
            return console.log('Unable to fetch');
        }

        console.log(user);
    });

    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        if (error) {
            return console.log('Unable to fetch');
        }

        console.log(users);
    });


    db.collection('tasks').findOne({ _id: new ObjectID('5ee0f3ebf170bb31b063bd7b') }, (error, task) => {
        console.log(task);
    });

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks);
    });


    // CREATING
    db.collection('users').insertOne({
        name: 'Sasi',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert the document data');
        }
        console.log(result.ops);
    });

    db.collection('users').insertOne({
        _id: id,
        name: 'Vinush',
        age: 27
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert the document data');
        }
        console.log(result.ops);
    });

    db.collection('users').insertMany([
        {
            name: 'kumar',
            age: 30
        },
        {
            name: 'santhiya',
            age: 27
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert the document data');
        }
        console.log(result.ops);
    });

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },
        {
            description: 'Renew inspection',
            completed: false
        },
        {
            description: 'Pot plants',
            completed: false
        },
    ], (error, result) => {
        if (error) {
            return console.log("Unable to insert tasks!!");
        }
        console.log(result.ops);
    });
});