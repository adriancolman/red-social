$(document).ready(function() {
  $("#boton-delete").click(function() {
    alert("lo has borrado");
  });
  $(".cajon-comentarios").hide();

  $("#post-button").click(function() {
   var comentario = $("#post-text").val();
   $(".cajon-comentarios").prepend(comentario);
    $(".cajon-comentarios").show();
  
    
    
    

 

  
  
  } );
});
