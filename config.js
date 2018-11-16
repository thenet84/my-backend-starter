const env = process.env;

// TO DO: Add the correct MongoDB Uri
module.exports = {
  mongodbUri: 'mongodb://<dbuser>:<dbpassword>...',
  port: env.PORT || 5000,
  host: env.HOST || '0.0.0.0',
  
  get serverUrl(){
    return 'http://' + this.host + ':' + this.port;
  }
};