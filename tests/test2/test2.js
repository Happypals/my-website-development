var elem = $('div');
var count = elem.length;
var loop = function(){

  setTimeout(function(){
    elem.each(function(){
      var $this = $(this);
      var height = (Math.random() * 30)+1;
      $this.css({
        'bottom': height,
        'height': height,
        'width': '3px',
      });
    });
    loop();
  }, 400);
}
//setColor();
loop();
