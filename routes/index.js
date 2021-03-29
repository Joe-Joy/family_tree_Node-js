const express = require("express");
const router = express.Router();

router.get("/", (req, res,next) => {
   // Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000/master_records/');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
// Pass to next layer of middleware
next();
})



module.exports = router;
