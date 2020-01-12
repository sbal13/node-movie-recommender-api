module.exports = (sequelize, type) => {
    return sequelize.define('movie', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: type.STRING,
        genre: type.STRING,
        poster_path: type.STRING,
        overview: type.STRING,
        release_date: type.STRING,
        rating: type.STRING,
    })
}
