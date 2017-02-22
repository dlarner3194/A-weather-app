$(document).ready(function(){
  
  var long;
  var lat;
  var fTemp;
  var cTemp;
  var kTemp;
 
  $.getJSON('http://ip-api.com/json',function(data2){
    lat = data2.lat;
    long = data2.lon;
    
      var apikey = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=d696973a4120fe502f96b1649a5de1a2';
 
  
  $.getJSON(apikey, function(data){
    var kTemp = data.main.temp;
    var city = data.name;
    var weatherType = data.weather[0].description;
    var windSpeed = data.wind.speed;
    var tempSwitch = true;
    
    fTemp = ((kTemp)*(9/5)-459.67).toFixed(0);
    cTemp = (kTemp - 273).toFixed(0);
    
    $('#city').html(city);
    $('#weatherType').html(weatherType);
    $('#fTemp').html(fTemp + "&#8457;");
    $('#fTemp').click(function(){
      if (tempSwitch === false){
        $('#fTemp').html(fTemp + "&#8457;");
        tempSwitch = true;
      } else {
        $('#fTemp').html(cTemp + "&#8451;");
        tempSwitch = false;
      }
    });
    windSpeed = (2.237*(windSpeed)).toFixed(1);
    $('#windSpeed').html(windSpeed + " mph");
    
    if (fTemp > 90){
      $('body').css('background-image','url(https://cdn2.hubspot.net/hub/205050/file-576458353-jpg/images/hot_weather_construction.jpg)');
    } else if (fTemp > 80){
      $('body').css('background-image','url(https://upload.wikimedia.org/wikipedia/commons/1/13/Tunnel_View,_Yosemite_Valley,_Yosemite_NP_-_Diliff.jpg)');
    } else if (fTemp > 70){
      $('body').css('background-image','url(http://www.travelchannel.com/content/dam/images/travel/fullset/2014/11/17/75/warm-weather-vacations-royal-davui-island-resort.rend.tccom.616.462.jpeg)');
    } else if (fTemp > 60){
      $('body').css('background-image','url(http://cdn.playbuzz.com/cdn/f3663a6a-d7f7-447f-8aae-7c6b9716e74d/10203aa8-2f21-4e0b-9844-4c1be9770732.jpg)');
    } else if (fTemp > 50){
      $('body').css('background-image','url(http://bosuns.com/wp-content/uploads/2016/10/brrrr.jpg)');
    } else if (fTemp > 40){
      $('body').css('background-image','url(https://dsx.weather.com//util/image/w/ef475dc2-a3ac-4087-b138-bcc6fb05dfb1.jpg?v=ap&w=980&h=551&api=7db9fe61-7414-47b5-9871-e17d87b8b6a0)');
    } else if (fTemp > 30){
      $('body').css('background-image','url(http://www.tattooedhomestead.com/wp-content/uploads/2016/02/IMG_0239.jpg)');
    }
    
    });
  });
});