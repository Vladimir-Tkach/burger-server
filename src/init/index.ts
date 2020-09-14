import mongo from "mongodb";
const client = mongo.MongoClient;

const url = "mongodb://localhost:27017/burger";

class Connect {
  url: string = "";
  constructor(url1: string) {
    this.url = url1;
  }

  public init() {
    client.connect(this.url, { useUnifiedTopology: true }, (err, db) => {
      if (err) {
        throw err;
      }

      console.log("DB Connect!");
      db.close();
    });
  }
}

export const DBConnect = new Connect(url);
