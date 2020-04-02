module.exports = {
  development: {
    client: "sqlite3",
    connection: { filename: "./data/cengocars.db3" },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./data/seeds" },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },
  production: {
    client: "sqlite3",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations",
      tableName: "dbmigrations"
    },
    seeds: { directory: "./data/seeds" }
  }
};
