const MongoLib = require('./mongo-lib');

class MediaMongo {

    constructor() {
        this.collection = "my-list";
        this.mongoLib = new MongoLib();
    }

    async saveToMyList(data) {
        return await this.mongoLib.create(this.collection, data);
    }

    async deleteFromMyList(idMedia, mediaType, idUser) {
        const query = { idMedia, mediaType, idUser };
        return await this.mongoLib.deleteQuery(this.collection, query);
    }

    async getMyList(idUser) {
        const query = { idUser };
        const projection = { _id: 0, idUser: 0 };
        return await this.mongoLib.getAll(this.collection, query, projection);
    }

    async checkInMyList(idMedia, mediaType, idUser) {
        const query = { idUser, idMedia, mediaType };

        const myList = await this.mongoLib.getAll(this.collection, query);

        if (myList && myList.length > 0)
            return true

        return false;
    }

}

module.exports = new MediaMongo();