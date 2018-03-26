$(document).ready(function(){

  var flavors = ["Strawberry", "Chocolate", "Vanilla", "Chocolate Chip", "RockyRoad"];
  flavors.forEach(function(flavor) {
    //var output = $(flavor).val();
    // alert(flavor);
    // var output = flavor[0];
  $("." + flavor).text(flavor);
  });


});
