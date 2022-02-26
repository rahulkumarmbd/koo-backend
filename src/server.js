const app = require("./index");

const port = process.env.PORT || 3000;
const connection = require("./config/db");

app.listen(port, async () => {
  try {
    console.log(`Running on Port ${port}`);
    await connection();
  } catch (error) {
    console.log(error.message);
  }
});