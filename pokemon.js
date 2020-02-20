$(document).ready(function() {
    $("#instrucciones").on("click", function(event) {
        event.preventDefault();

        $("#respuesta").html("<hr>" +
            "<h1 align='center'>Instrucciones:</h1>" +
            "<hr>" +
            "<p>La página tendrá 2 botones y un campo de entrada <i>input</i>.<br/><ul><li>Al pulsar el primer botón (llamado 'Instrucciones'), se cargará asíncronamente un archivo llamado <b>instrucciones.html.</b></li>" +
            "<li>Al pulsar el segundo botón (llamado 'Cargar JSON'), se recorrerá un archivo json y se mostrarán en formato tabla.</li>" +
            "<li>El archivo JSON será el adjunto <i>pokedex.json</i>, que previamente tendremos en el servidor.</li>" +
            "<li>Al pulsar el botón, si hay algo escrito en el <i>input</i>, sólo se mostrarán los objetos cuyo <i>id</i> sea <b>menor o igual</b> que el especificado.</li>" +
            "<li>La tabla no incluirá todos los campos, sólo el <i>id</i>, el campo <i>english</i> de <i>name</i> y el campo <i>type</i> como un string separados por comas.</li></ul></p>"


        )
    })


    $("#cargar").on("click", function(event) {
        event.preventDefault();

        $.getJSON("pokemon.json", function(result) {
            var tabla = $("<br/><br/><table class='table'><thead><tr><th>ID</th><th>Nombre</th><th>Tipo</th></tr>");
            console.log(result);

            if ($("#input").val() == "") {
                $.each(result, function(i, pokemon) {

                    tabla.append("<tr><td>" + pokemon.id + "</td><td>" + pokemon.name.english + "</td><td>" + pokemon.type + "</tr></thead></table>");

                })
            } else {
                $.each(result, function(i, pokemon) {
                    if (i < $("#input").val()) {
                        tabla.append("<tr><td>" + pokemon.id + "</td><td>" + pokemon.name.english + "</td><td>" + pokemon.type + "</tr></thead></table>");
                    }
                })
            }

            $("#respuesta").html(tabla);
        })
    })
});