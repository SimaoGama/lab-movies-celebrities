//  Add your code here
const { Schema, model } = require('mongoose');

const celebrityScheema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  { timestamps: true }
);

const celebrityModel = model('Celebrity', celebrityScheema);

module.exports = celebrityModel;
