module.exports = {
  development: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      host: process.env.MYSQL_SERVER,
      dialect: 'mysql',
      timezone:process.env.TZ,

  },
  test: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      host: process.env.MYSQL_SERVER,
      dialect: 'mysql',
      timezone:'+09:00',
  },
  production: {
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      host: process.env.MYSQL_SERVER,
      dialect: 'mysql',
      timezone:'+09:00',
  },
};