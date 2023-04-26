//  Add your code here
const { Schema, model } = require('mongoose');

const movieScheema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: { type: Schema.Types.ObjectId, ref: 'Celebrity' }
  },
  { timestamps: true }
);

const movieModel = model('Movie', movieScheema);

module.exports = movieModel;
