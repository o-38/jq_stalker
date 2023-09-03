$(function(){
  const mouse = $("#stalker");

  $(document).on("mousemove",function(e){
    const x=e.clientX;
    const y=e.clientY;
    mouse.css({
      "transform":
      "translate(" + x + "px," + y + "px)",
    });
  });
});