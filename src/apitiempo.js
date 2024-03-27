var app = {};
app.apikey = "c4a4b2a5e6c2b906f280ae5147dceb6f";
app.url = "http://api.openweathermap.org/data/2.5/weather?q=Madrid&APPID=" + app.apikey + "&units=metric";

app.cargaDatos = function(){
    $.ajax({
        url: app.url,
        success: function(data) {
            app.datos = data;
            app.procesaDatos();
        },
        error: function() {
            alert("¡Ups! No puedo obtener información de la API");
        }
    });
}

app.procesaDatos = function(){
    app.condicionNombre = app.datos.weather[0].main;
    app.temperatura = app.datos.main.temp;
    var condicionIcono = app.datos.weather[0].icon;
    app.icono = app.obtenIcono(condicionIcono);
    app.muestra();
}

app.obtenIcono = function(weatherIcon) {
    var icon;
    switch (weatherIcon) {
        case "01d":
            icon = {
                class: "wi-day-sunny",
                url: "http://openweathermap.org/img/wn/01d.png"
            };
            break;
        case "01n":
            icon = {
                class: "wi-night-clear",
                url: "http://openweathermap.org/img/wn/01n.png"
            };
            break;
        case "02d":
            icon = {
                class: "wi-day-cloudy",
                url: "http://openweathermap.org/img/wn/02d.png"
            };
            break;
        case "02n":
            icon = {
                class: "wi-night-alt-cloudy",
                url: "http://openweathermap.org/img/wn/02n.png"
            };
            break;
        case "03d":
        case "03n":
            icon = {
                class: "wi-cloud",
                url: "http://openweathermap.org/img/wn/03d.png"
            };
            break;
        case "04d":
        case "04n":
            icon = {
                class: "wi-cloudy",
                url: "http://openweathermap.org/img/wn/04d.png"
            };
            break;
        case "09d":
        case "09n":
            icon = {
                class: "wi-showers",
                url: "http://openweathermap.org/img/wn/09d@2x.png"
            };
            break;
        case "10d":
        case "10n":
            icon = {
                class: "wi-rain",
                url: "http://openweathermap.org/img/wn/10d.png"
            };
            break;
        case "11d":
        case "11n":
            icon = {
                class: "wi-thunderstorm",
                url: "http://openweathermap.org/img/wn/11d.png"
            };
            break;
        case "13d":
        case "13n":
            icon = {
                class: "wi-snow",
                url: "http://openweathermap.org/img/wn/13d.png"
            };
            break;
        case "50d":
        case "50n":
            icon = {
                class: "wi-fog",
                url: "http://openweathermap.org/img/wn/50d.png"
            };
            break;
        default:
            icon = {
                class: "wi-na",
                url: "" // Puedes poner aquí una URL de un icono de "imagen no disponible" si lo deseas
            };
            break;
    }
    return icon;
}


app.muestra = function(){
    $('#js_w_temp').html("<p class='weather_temperature'>" + app.temperatura + "º</p>");
    $('#js_w_icon').html("<i class='wi " + app.icono.class + "'></i>");
}



$(document).ready(function() {
    app.cargaDatos();
});
