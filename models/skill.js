import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  aquired: Boolean,
})

const Skill = mongoose.model('skill', skillSchema)

export {
  Skill
}