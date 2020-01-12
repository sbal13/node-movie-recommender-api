module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        username: type.STRING,
        password_digest: type.STRING,
        email: type.STRING
    })
}