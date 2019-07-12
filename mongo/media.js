const MongoLib = require('./mongo-lib');

class MediaMongo extends MongoLib {

    constructor() {
        super();
        this.collection = "media";
    }

    async saveToMyList(data) {
        return await this.create(this.collection, data);
    }

    async deleteFromMyList(id) {
        return await this.delete(this.collection, id);
    }

    async getMyList(id, query) {
        return await this.getAll(this.collection, id, query);
    }

}

module.exports = new MediaMongo();