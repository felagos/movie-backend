const MongoLib = require('./mongo-lib');

class MediaMongo {

    constructor() {
        this.collection = "users";
        this.mongoLib = new MongoLib();
    }

    async getUser(email) {
        const query = { email: email };
        const users = await this.mongoLib.getAll(this.collection, query);

        if (users && users.length >= 0)
            return users[0];

        return null;
    }

    async registerUser(email, password, nick) {
        const user = { email, password, nick };
        return await this.mongoLib.create(this.collection, user);
        
    }


}

module.exports = new MediaMongo();