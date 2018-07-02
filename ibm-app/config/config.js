module.exports = {
    development: {
      dialect: "mssql",
      storage: "./db.development.mssql"
    },
    test: {
      dialect: "mssql",
      storage: ":memory:"
    },
    production: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: process.env.DB_HOSTNAME,
      dialect: 'mssql',
      use_env_variable: 'DATABASE_URL'
    }
  };