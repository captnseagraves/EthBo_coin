module.exports = {
  networks: {
    "live": {
   network_id: 1, // Ethereum public network
   // optional config values
   // host - defaults to "localhost"
   // port - defaults to 8545
   gas: 900000,
   gasPrice: 0.00265005,
   from: 0x332899fe4B0C8F5794dcA1d7e34d0085aC7ee7FE
    },
    "morden": {
   network_id: 2,        // Official Ethereum test network
   host: "178.25.19.88", // Random IP for example purposes (do not use)
   port: 80
    },
    "staging": {
   network_id: 1337 // custom private network
   // use default rpc settings
    },
    "development": {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4712388
    }
  }
};
