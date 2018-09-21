const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'no value'
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'no value'
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: 'no value'
    },
    status: {
      type: Sequelize.ENUM('open','closed')
    }
  })

  const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'no value'
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'no value',
      validate: {
        isEmail: true
      }
    }
  })

  module.exports = {db, Page, User};
