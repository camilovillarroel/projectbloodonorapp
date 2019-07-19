$(document).on('ready turbolinks:load', function() {


    Survey.Survey.cssType = "bootstrap";

var surveyJSON = {"locale":"es","completedHtml":{"es":"<h3>Lo lamentamos, pero probablemente no puedas ser donante de sangre en este momento. Muchas gracias por tu disposición,  te invitamos a hacer todas las consultas que tengas a nuestros canales de información, y a que cuides tu salud, para que así en un futuro puedas ayudar a salvar vidas con una donación altruista de sangre.</h3>"},"completedHtmlOnCondition":[{"expression":"{question1}and{question2}and{question3}and{question4}and{question5}and{question6}and{question9}and{question12}and{question13}and{question14}and{question15}and{question16}!= 0","html":"<h3> ¡Gracias por completar la encuesta! al parecer estas en condiciones de ayudar a la comunidad con tu donación de sangre. Te invitamos a buscar el sitio de donación más cercano a tu localidad en la siguiente pantalla, y recuerda que el resultado de esta encuesta es preliminar. Te deseamos mucha suerte y gracias por tu ayuda.</3>"},{},{}],"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"¿Tienes o has tenido problemas de salud (que involucre hospitalización)?","choices":[{"value":"0","text":"Sí"},{"value":"1","text":"No"}],"colCount":2}]},{"name":"page2","elements":[{"type":"radiogroup","name":"question2","title":{"es":"¿Ha consultado médico, enfermera, matrona o farmacéutico en los últimos meses?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page3","elements":[{"type":"radiogroup","name":"question3","title":{"es":"¿Tienes o has tenido alguna enfermedad infecciosa en el último mes (fiebre, diarrea, resfrío)?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page4","elements":[{"type":"radiogroup","name":"question4","title":{"es":"¿Está tomando o tomó algún medicamento últimamente?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page5","elements":[{"type":"radiogroup","name":"question5","title":{"es":"¿Ha tomado Aspirina en los últimos 3 días "},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page6","elements":[{"type":"radiogroup","name":"question6","title":{"es":"¿Tiene o ha tenido problemas con la presión, sangramiento, alergias, convulsiones o desmayos?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page7","elements":[{"type":"radiogroup","name":"question7","title":{"es":"Sexo (referente a genitalidad)"},"choices":[{"value":"item1","text":{"es":"Masculino"}},{"value":"item2","text":{"es":"Femenino"}}],"colCount":2},{"type":"radiogroup","name":"question8","visibleIf":"{question7} = \"item2\"","title":{"es":"¿Has tenido algún parto o aborto en los últimos 12 meses?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page8","elements":[{"type":"html","name":"question11","html":{"es":"<img src=\"https://m.elmostrador.cl/media/2015/10/vinchuca_320x180.jpg\" alt=\"Flowers in Chania\">"}},{"type":"radiogroup","name":"question9","title":{"es":"¿Lo ha picado la vinchuca? (Insecto del norte de Chile)"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page9","elements":[{"type":"radiogroup","name":"question12","title":{"es":"¿Tuvo hepatitis o ha estado con alguien con hepatitis?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page10","elements":[{"type":"radiogroup","name":"question13","title":{"es":"Tú, o tu pareja, en los últimos 12 meses han sido perforados por alguna (marcar solo una):"},"choices":[{"value":"0","text":{"es":"Vacunas"}},{"value":"0","text":{"es":"Tatuajes"}},{"value":"0","text":{"es":"Acupuntura"}},{"value":"0","text":{"es":"Aros, Piercing"}},{"value":"1","text":{"es":"Ninguno"}}]}]},{"name":"page11","elements":[{"type":"radiogroup","name":"question14","title":{"es":"¿Has usado drogas inyectables en las venas o compartido agujas con otras personas?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page12","elements":[{"type":"radiogroup","name":"question15","title":{"es":"¿Tienes o has tenido alguna enfermedad de transmisión sexual (sífilis, gonorrea u otra)?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]},{"name":"page13","elements":[{"type":"radiogroup","name":"question16","title":{"es":"¿Cuántas parejas sexuales has tenido en los últimos 12 meses?"},"choices":[{"value":"2","text":{"es":"Ninguna"}},"1",{"value":"0","text":{"es":"2 o más"}}],"colCount":3},{"type":"radiogroup","name":"question17","visibleIf":"{question16} = \"1\" or {question16} = \"0\"","title":{"es":"¿Has pagado o recibido pago para tener relaciones sexuales?"},"choices":[{"value":"0","text":{"es":"Sí"}},{"value":"1","text":{"es":"No"}}],"colCount":2}]}],"showQuestionNumbers":"off","showProgressBar":"bottom","goNextPageAutomatic":true}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});





















});