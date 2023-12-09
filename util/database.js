const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const connectMongo = (callback) => {
  MongoClient.connect(
    "mongodb+srv://birceste:qoXeJsFD3xNPCFTw@cluster0.goo3jgj.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected to mongodb");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database found";
};

exports.connectMongo = connectMongo;
exports.getDb = getDb;
