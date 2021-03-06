const express = require("express"); // Import express for simplified routing
const path = require("path");
const compression = require("compression");
const cors = require("cors"); // Setup cors for cross-origin requests for all routes
const algosdk = require("algosdk");
const constants = require("./service/global");

const app = express(); // Setup express
const port = 8000; // Setup port 8000 for Express server

const algoUrl = new URL(constants.algodurl);
const client = new algosdk.Algodv2(
    constants.algodapi,
    algoUrl,
    algoUrl.port ? algoUrl.port : 8080);

app.use(cors()); // Enable cors
app.use(compression()); // Compress requests;
app.use(express.static(path.join(__dirname, "build")));

// --> Serve React build files on load
app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "build", "index.html"));
});

// --> /blockservice/:blocknumber
// --> /all/blocks/:lastBlock/:limit/:full (paginated)
require('./service/query/blocks')(app, client);

// --> /transactionservice/:txid
// --> /all/transactions/:lastTransaction/:limit/:full (paginated)
// --> /all/addresstx/:address
require('./service/query/transactions')(app);

// --> /addressservice/:address
require('./service/query/addresses')(app);

// --> /detect/:string
require('./service/query/detection')(app);

// --> /stats
require('./service/stats/stats')(app);

// --> /health
require('./service/health/health')(app);

// --> Catch all for serving other requests
app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port); // Initialize server
