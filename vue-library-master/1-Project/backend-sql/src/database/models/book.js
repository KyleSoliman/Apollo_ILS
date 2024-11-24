const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  const book = sequelize.define(
    'book',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      callNumber: {                           
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [5, 50],
          notEmpty: true,
        }
      },
      
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      author: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      
      edition: {
        type: DataTypes.STRING(30),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },

      publisher: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },

      copyright: {
        type: DataTypes.STRING(25),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },

      accession_number: {
        type: DataTypes.STRING(30),
        allowNull: true,
        validate: {
          notEmpty: true,
        }
      },

      numberOfCopies: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        }
      },
      stock: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM,
        values: [
          "available",
          "unavailable"
        ],
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    },
  );

  book.associate = (models) => {


    models.book.hasMany(models.file, {
      as: 'images',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.book.getTableName(),
        belongsToColumn: 'images',
      },
    });

    models.book.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.book.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return book;
}; 
