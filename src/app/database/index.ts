import mongoose from "mongoose";
import config from "../../config";

const connection: object | any = config.database.mongodb.connectionString;
console.log(connection);

if (!connection) {
    console.log("Debes de crear las variables de entorno en el archivo .env");
}
const params: object = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(connection, params)
    .then((db) => {
        console.log("DB is connected", db.connection.name);
    })
    .catch((err) => {
        console.log(err);
    });

process.on("uncaughtException", (err) => {
    console.log(err);
    mongoose.disconnect();
});