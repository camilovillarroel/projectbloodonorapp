$(document).on('ready turbolinks:load', function() {


    Survey.Survey.cssType = "bootstrap";

    var surveyJSON = {"locale":"es","pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"¿Tienes o has tenido problemas de salud (que involucre hospitalización)?","choices":[{"value":"item1","text":"Sí"},{"value":"item2","text":"No"}],"colCount":2}]},{"name":"page2","elements":[{"type":"radiogroup","name":"question2","title":{"es":"¿Ha consultado médico, enfermera, matrona o farmacéutico en los últimos meses?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page3","elements":[{"type":"radiogroup","name":"question3","title":{"es":"¿Tienes o has tenido alguna enfermedad infecciosa en el último mes (fiebre, diarrea, resfrío)?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page4","elements":[{"type":"radiogroup","name":"question4","title":{"es":"¿Está tomando o tomó algún medicamento últimamente?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page5","elements":[{"type":"radiogroup","name":"question5","title":{"es":"¿Ha tomado Aspirina en los últimos 3 días "},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page6","elements":[{"type":"radiogroup","name":"question6","title":{"es":"¿Tiene o ha tenido problemas con la presión, sangramiento, alergias, convulsiones o desmayos?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page7","elements":[{"type":"radiogroup","name":"question7","title":{"es":"Sexo (referente a genitalidad)"},"choices":[{"value":"item1","text":{"es":"Masculino"}},{"value":"item2","text":{"es":"Femenino"}}],"colCount":2},{"type":"radiogroup","name":"question8","visibleIf":"{question7} = \"item2\"","title":{"es":"¿Has tenido algún parto o aborto en los últimos 12 meses?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page8","elements":[{"type":"html","name":"question11","html":{"es":"<img src=\"https://m.elmostrador.cl/media/2015/10/vinchuca_320x180.jpg\" alt=\"Flowers in Chania\">"}},{"type":"radiogroup","name":"question9","title":{"es":"¿Lo ha picado la vinchuca? (Insecto del norte de Chile)"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page9","elements":[{"type":"radiogroup","name":"question12","title":{"es":"¿Tuvo hepatitis o ha estado con alguien con hepatitis?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page10","elements":[{"type":"radiogroup","name":"question13","title":{"es":"Tú, o tu pareja, en los últimos 12 meses han sido perforados por:"},"hasOther":true,"choices":[{"value":"item1","text":{"es":"Vacunas"}},{"value":"item2","text":{"es":"Tatuajes"}},{"value":"item3","text":{"es":"Acupuntura"}},{"value":"item4","text":{"es":"Aros, Piercing"}}],"otherText":{"es":"Ninguna"}}]},{"name":"page11","elements":[{"type":"radiogroup","name":"question14","title":{"es":"¿Has usado drogas inyectables en las venas o compartido agujas con otras personas?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page12","elements":[{"type":"radiogroup","name":"question15","title":{"es":"¿Tienes o has tenido alguna enfermedad de transmisión sexual (sífilis, gonorrea u otra)?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}],"colCount":2}]},{"name":"page13","elements":[{"type":"radiogroup","name":"question16","title":{"es":"¿Cuántas parejas sexuales has tenido en los últimos 12 meses?"},"choices":[{"value":"item1","text":{"es":"Ninguna"}},{"value":"item2","text":{"es":"1"}},{"value":"item3","text":{"es":"2 o más"}}],"colCount":3},{"type":"radiogroup","name":"question17","visibleIf":"{question16} = \"item2\" or {question16} = \"item3\"","title":{"es":"¿Has pagado o recibido pago para tener relaciones sexuales?"},"choices":[{"value":"item1","text":{"es":"Sí"}},{"value":"item2","text":{"es":"No"}}]}]}],"showProgressBar":"bottom","goNextPageAutomatic":true}
    
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