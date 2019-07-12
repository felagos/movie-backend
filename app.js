const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config');

const app = express();
const mediaRouter = require('./routes/media-routes');

app.use(helmet());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/media", mediaRouter);

app.listen(config.port, () => {
    console.log(`server en el port ${config.port}`);
});