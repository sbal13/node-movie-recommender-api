const Sequelize = require('sequelize')
const UserModel = require('./models/user')
// const WatchedMovieModel = require('./models/watched_movie')
const MovieModel = require('./models/movie')

const sequelize = new Sequelize('test', 'root', 'root', {
  // host: 'localhost',
  dialect: 'sqlite',
  storage: './database.sqlite',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const User = UserModel(sequelize, Sequelize)
const WatchedMovie = sequelize.define('watched_movie', {
  id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
  rating: Sequelize.BOOLEAN

})
const Movie = MovieModel(sequelize, Sequelize)

User.belongsToMany(Movie, { through: WatchedMovie, unique: false })
Movie.belongsToMany(User, { through: WatchedMovie, unique: false })


sequelize.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  User,
  Movie,
  WatchedMovie
}