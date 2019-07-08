# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Question.destroy_all
Option.destroy_all

question1 = Question.create({content: '¿tienes mas de 18?'})
question2 = Question.create({content: '¿pesas mas de 50kg??'})

option1 = Option.create({content: 'si', approved: true, question_id: 9 })
option2 = Option.create({content: 'no', approved: false, question_id: 9})

option3 = Option.create({content: 'si', approved: true, question_id: 10 })
option4 = Option.create({content: 'no', approved: false, question_id: 10})

addresses = 
"Av. Zañartu #1085, Independencia
Av. Santa Rosa #1234, Santiago
Portugal #125, Santiago
Camino Rinconada #1201, Maipú
Av. Salvador #364, Providencia
Av. Las Torres #5150, Peñalolén
Gran Avenida #3204, San Miguel
Av. Vitacura #0115, Providencia
Av. Concha y Toro #3459, Puente Alto
Esperanza #2150, San Ramón
Av. Froilán Roa #6524, La Florida
Huérfanos #3255, Santiago
San Martín #771, Santiago
"

Intitution.destroy_all
addresses = addresses.split("\n")
addresses.each do |address|
    Intitution.create!(name: Faker::Name.name, address:
address)
 sleep 1
end

