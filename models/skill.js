import mongoose from "mongoose"

const Schema = mongoose.Schema

const skillSchema = new Schema({
  name: String,
  aquired: Boolean,
})

const Todo = mongoose.model('Skill', todoSchema)

export {
  Skill
}