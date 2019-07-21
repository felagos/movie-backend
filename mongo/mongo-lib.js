const config = require('../config');
const { MongoClient, ObjectId } = require('mongodb');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/?authSource=${DB_NAME}`;

class MongoLib {

    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.dbName = DB_NAME;
    }

    connect() {
        return new Promise((resolve, reject) => {
            this.client.connect(error => {
                if (error) reject(error);
                resolve(this.client.db(this.dbName));
            });
        });
    }

    getAll(collection, query, projection = {}) {
        return this.connect().then(db => {
            const cursor = db.collection(collection).find(query, projection);
            return cursor.project(projection).toArray();
        });
    }

    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(id) });
        });
    }

    create(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data);
        }).then(result => result.insertedId).catch(err => console.log("error en mongo", err));
    }

    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
        }).then(result => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id: ObjectId(id) });
        }).then(() => id);
    }

    distinct(collection, attributte) {
        return this.connect().then(db => {
            return db.collection(collection).distinct(attributte)
        });
    }

}

module.exports = MongoLib;