module.exports = function (sequelize, DATATYPE) {
const zombieTable = sequelize.define('zombiesTable', {
    // attributes
    zombieName: {
      type: DATATYPE.STRING,
      allowNull: false
    },
    headShot: {
      type: DATATYPE.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
  {
    freezeTableName: true
  });

  return zombieTable;
}
  