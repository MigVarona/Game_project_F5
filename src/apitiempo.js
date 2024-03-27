var app = {};
app.apikey = "c4a4b2a5e6c2b906f280ae5147dceb6f";
app.url = "http://api.openweathermap.org/data/2.5/weather?q=Madrid&APPID=" + app.apikey + "&units=metric";

app.fetchData = async function() {
  try {
    const response = await fetch(app.url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos del clima:", error);
    return null;
  }
};

app.cargaDatos = async function() {
  const data = await app.fetchData();
  if (data) {
    app.datos = data;
    console.log("Datos del clima:", app.datos);
    app.procesaDatos();
  } else {
    alert("¡Ups! No puedo obtener información de la API");
  }
};

app.procesaDatos = function(){
    app.condicionNombre = app.datos.weather[0].main;
    app.temperatura = app.datos.main.temp;
    var condicionIcono = app.datos.weather[0].icon;
    app.icono = app.obtenIcono(condicionIcono);
    app.muestra();
};

app.obtenIcono = function(weatherIcon) {
    var icon;
    switch (weatherIcon) {
        case "01d":
            icon = {
                class: "wi-day-sunny",
                url: "img/01d.png"
            };
            break;
        case "01n":
            icon = {
                class: "wi-night-clear",
                url: "img/01n.png"
            };
            break;
        case "02d":
            icon = {
                class: "wi-day-cloudy",
                url: "img/02d.png"
            };
            break;
        case "02n":
            icon = {
                class: "wi-night-alt-cloudy",
                url: "img/02n.png"
            };
            break;
        case "03d":
        case "03n":
            icon = {
                class: "wi-cloud",
                url: "img/03d.png"
            };
            break;
        case "04d":
        case "04n":
            icon = {
                class: "wi-cloudy",
                url: "img/04d.png"
            };
            break;
        case "09d":
        case "09n":
            icon = {
                class: "wi-showers",
                url: "img/09d.png"
            };
            break;
        case "10d":
        case "10n":
            icon = {
                class: "wi-rain",
                url: "img/10d.png"
            };
            break;
        case "11d":
        case "11n":
            icon = {
                class: "wi-thunderstorm",
                url: "img/11d.png"
            };
            break;
        case "13d":
        case "13n":
            icon = {
                class: "wi-snow",
                url: "img/13d.png"
            };
            break;
        case "50d":
        case "50n":
            icon = {
                class: "wi-fog",
                url: "img/50d.png"
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
};

app.muestra = function(){
    $('#js_w_temp').html("<p class='weather_temperature'>" + Math.round(app.temperatura) + "º</p>");
    console.log("Ruta del icono:", app.icono.url); // Verificar la ruta del icono
    $('#js_w_icon').html("<img src='" + app.icono.url + "' alt='Weather Icon'>");
};

$(document).ready(function() {
    app.cargaDatos();
});
