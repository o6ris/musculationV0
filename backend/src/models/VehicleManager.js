const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `insert into ${this.table} (name, picture, gearbox, fuel, price, available) values (?,?,?,?,?,?)`,
      [
        vehicle.name,
        vehicle.picture,
        vehicle.gearbox,
        vehicle.fuel,
        vehicle.price,
        vehicle.available,
      ]
    );
  }
}

module.exports = ItemManager;
