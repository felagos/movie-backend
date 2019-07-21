const MongoLib = require('./mongo-lib');

class MediaMongo {

    constructor() {
        this.collection = "my-list";
        this.mongoLib = new MongoLib();
    }

    async saveToMyList(data) {
        return await this.mongoLib.create(this.collection, data);
    }

    async deleteFromMyList(id) {
        return await this.mongoLib.delete(this.collection, id);
    }

    async getMyList(id, query) {
        return await this.mongoLib.getAll(this.collection, id, query);
    }

}

module.exports = new MediaMongo();