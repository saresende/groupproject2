// Initializes connection to database and defines models
// Dependency on sequelize
exports.initializeModels = function() {

    // Dependencies
    // =============================================================
    const Sequelize = require("sequelize");

    // The connection URL is provided during
    // provisioning of the CLEARDB MySQL Database
    const CLEARDB_DATABASE_URL = "mysql://b968fc970b80f1:f93d4656@us-cdbr-iron-east-03.cleardb.net/heroku_a38f73473a003db?reconnect=true";

    // Configure a sequelize connection to the CLEARDB MySQL database
    const sequelize = new Sequelize(CLEARDB_DATABASE_URL);

    // Acquire connection to the database
    sequelize
      .authenticate()
      .then(() => {
        console.log(`Connection to database ${CLEARDB_DATABASE_URL} has been established successfully.`);
      })
      .catch(err => {
        console.error(`Unable to connect to database ${CLEARDB_DATABASE_URL} :`, err);
        return;
      });

    // Expose the MeanSeaLevelChange model
    exports.MeanSeaLevelChange = sequelize.define('MeanSeaLevelChange', {
      year: {
        type: Sequelize.DOUBLE
      },
      change: {
          type: Sequelize.DOUBLE,
          field: 'change_msl_mm'
      }
    },
    {
      // don't add the timestamp attributes (updatedAt, createdAt)
      timestamps: false,

      // don't delete database entries but set the newly added attribute deletedAt
      // to the current date (when deletion was done). paranoid will only work if
      // timestamps are enabled
      paranoid: true,

      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,

      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true,

      // define the table's name
      tableName: 'mean_sea_level_change_global'
    });

} // END initializeModels
