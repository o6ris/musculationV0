const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
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

  update(vehicle, id) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      vehicle,
      id,
    ]);
  }
}

module.exports = VehicleManager;
