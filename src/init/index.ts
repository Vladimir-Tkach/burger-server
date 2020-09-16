import mongoose from "mongoose";

const url = "mongodb://localhost:27017/burger";

class Connect {
  url: string = "";
  constructor(url1: string) {
    this.url = url1;
  }

  public async init() {
    await mongoose.connect(
      this.url,
      { useUnifiedTopology: true, useNewUrlParser: true },
      (err) => {
        if (err) {
          console.log("err: ", err);
        }

        console.log(console.log("DB Connect!"));
      }
    );
  }
}

export const DBConnect = new Connect(url);
