# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
question1 = Question.create({content: '¿tienes mas de 18?'})
question2 = Question.create({content: '¿pesas mas de 50kg??'})

option1 = Option.create({content: 'si', approved: true, question_id: 1 })
option2 = Option.create({content: 'no', approved: false, question_id: 1})

option3 = Option.create({content: 'si', approved: true, question_id: 2 })
option4 = Option.create({content: 'no', approved: false, question_id: 2})


