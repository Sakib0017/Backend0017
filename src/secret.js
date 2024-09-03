require('dotenv').config();

const serverPort = 3007;
const MongodbURL = "mongodb+srv://Admin:devpdcl@webdb.p9ofp.mongodb.net/test?retryWrites=true&w=majority&appName=webDB";
const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || '/public/images/users/avatar.png';

module.exports = {serverPort, MongodbURL, defaultImagePath}