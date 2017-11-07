$(function(){
	builder = '';
	for (var i = 0; i < names.length; i++) {
		builder += '<li id="player'+i+'">'+names[i]+'</li>'
	}
    $("#player_names").html(builder);
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}