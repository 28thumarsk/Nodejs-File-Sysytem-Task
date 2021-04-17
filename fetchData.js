const http = require("http");
const fs = require("fs");

const fetchData = http.get(
  "http://jsonplaceholder.typicode.com/posts",
  (res) => {
    let data = " ";

    res.on("data", (d) => {
      data += d;
    });
    res.on("end", () => {
      console.log("Data has been written to the posts.json file");
      fs.writeFileSync("./result/posts.json", data);
    });
  }
);
