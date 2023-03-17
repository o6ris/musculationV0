const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findOne(user) {
    return this.connection.query(
      `select * from  ${this.table} where alias = ?`,
      [user.alias]
    );
  }
}

module.exports = UserManager;
