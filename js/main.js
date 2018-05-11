var objPoints = {};
$( document ).ready(function() {
    
});
var map;
var infoWindow;

function createPoints(){
  infoWindow = new google.maps.InfoWindow();
  var myLatLng = {lat:parseFloat(objPoints.Map_Data[0].latitude) , lng: parseFloat(objPoints.Map_Data[0].longitude)};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  for(var i = 0; i < objPoints.Map_Data.length; i++){
    addMarker(objPoints.Map_Data[i]);
    //break;
  }
  //initMap();
}
function addMarker(data){
  console.log(data);
  var myLatLng = {lat:parseFloat(data.latitude) , lng: parseFloat(data.longitude)};
  console.log(myLatLng);

  

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: data.fullName
  });
  
  //Click event 
  (function(marker, data, infoWindow) {
      google.maps.event
              .addListener(
                      marker,
                      "click",
                      function(e) {                                                   
                          infoWindow
                                  .setContent('<div style = width:300px;min-height:50px><p>Name: '+data.fullName+'</p><p>Device Id: '+data.deviceID+'</p><p>Mob: '+data.mobNumber+'</p><p>Date Time: '+data.dateTime+'</p></div>');
                          infoWindow
                                  .open(map, marker);
                      });
  })(marker, data, infoWindow);
}
function loadData(){
  $.get("http://www.fryble.com/admin/usersMap.php", function(data, status){
        //alert("Data: " + data + "\nStatus: " + status);
        objPoints = JSON.parse(data);
        console.log(objPoints.Map_Data);
        createPoints();
    });
}
function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  /*var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });*/

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}