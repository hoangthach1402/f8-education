const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongooseDelete = require('mongoose-delete')
const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    level: { type: String },
    videoId: { type: String },
  },
  {
    timestamps: true,
  }
)
// add Plugin
Course.plugin(mongooseDelete, { overrideMethods: 'all' }, { deletedAt: true })

module.exports = mongoose.model('Course', Course)
