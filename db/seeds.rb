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
    
option1 = Option.create({content: 'si', approved: true, question_id: question1.id })
option2 = Option.create({content: 'no', approved: false, question_id: question1.id})    


question2 = Question.create({content: '¿pesas mas de 50kg??'}) 
    
option3 = Option.create({content: 'si', approved: true, question_id: question2.id })
option4 = Option.create({content: 'no', approved: false, question_id: question2.id})


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

names = 
"Complejo Hospitalario San José
Hospital Clínico San Borja Arriarán
Hospital de Urgencia Asistencia Pública Dr. Alejandro del Río
Hospital El Carmen, Maipú
Hospital Del Salvador
Hospital Luis Tisné
Hospital Barros Luco
Centro Metropolitano de Sangre y Tejidos
Complejo Hospitalario Dr. Sótero del Río
Hospital Padre Hurtado
Hospital Dra. Eloísa Díaz, La Florida
Hospital San Juan de Dios, Santiago
Instituto Traumatológico Dr. Teodoro Gebauer
"

Intitution.destroy_all
addresses = addresses.split("\n")
names = names.split("\n")
addresses.each_with_index do |address, index|
    Intitution.create!(name: names[index], address:
address)
 sleep 1
end

