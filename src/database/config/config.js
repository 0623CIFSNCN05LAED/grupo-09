module.exports = {
  development: {
    username: "root",
    password: null,
    database: "ecommerce",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
        timestamps: false
    }
  },
  test: {
    username: "root",
    password: null,
    database: "xxxxx",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "xxxxx",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
