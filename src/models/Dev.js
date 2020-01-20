const moongose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const DevSchema = new moongose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  locations: {
    type: PointSchema,
    index: "2dsphere"
  }
});

module.exports = moongose.model("Dev", DevSchema);
