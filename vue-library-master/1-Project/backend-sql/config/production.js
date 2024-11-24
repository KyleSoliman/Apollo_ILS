module.exports = {
  env: 'production',

  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: '',
    database: 'postgres',
    host: 'postgres',
    logging: console.log,
    operatorsAliases: false,
  }, 
/*
     database: {
     username: 'root',
     dialect: 'mysql',
     password: '',
     database: 'production',
     host:
       '<localhost>',
     logging: console.log,
     operatorsAliases: false,
   }, */
/*
    database: {
    username: 'root', // Your MariaDB username
    password: '', // Your MariaDB password (leave empty if none)
    database: 'Apollodb', // The name of your database
    host: '127.0.0.1', // Localhost IP address
    dialect: 'mariadb', // Specify MariaDB as the dialect
    port: 3306, // Default port for MariaDB/MySQL
    logging: console.log, // Logs SQL queries for debugging
    operatorsAliases: false, // Disables deprecated string-based operators
  }, */

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: true,

  clientUrl: '<http://localhost:8080>',

  defaultUser: '<insert your email here>',

  uploadDir: os.tmpdir(),

  authJwtSecret: '<5b1fb1e3-10e1-416f-8580-5ee4c1396733>',
};
