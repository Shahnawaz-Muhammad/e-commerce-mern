const express = require("express");
const cors = require('cors')
const app = express();
require('dotenv').config() /* makes accessible .env files*/
const PORT = 5000;
const allProductsRoute = require('./routes/product.route')
const allUsersRoute = require('./routes/user.route')
require('./db/db')()

app.use(express.json()) 
app.use(cors({
  cors: "*"
}))


// --------------Routes-------------//
app.get('/',(req, res) => {
  res.send('hellooooooooooooo')
})
app.use('/api/products', allProductsRoute)

app.use('/api/users', allUsersRoute)

// --------------Routes-------------//
// --------------Server Connection-------------//
const NodeJsServer = () => {
  try {
    // app.use(routes());
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  } catch (error) {
    console.log("Error to connect to a server", error);
  }
};

NodeJsServer();
