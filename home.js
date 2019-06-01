$(document).ready(function() {
  // Codigo a ejecutarse una vez que se carga la pagina

  // $("#posts-container").html("<h1>Hola jQuery</h1>");

  $("#post-button").click(function() {
    $("#posts-container").append(
      +$("#post-message").val() + "</p>" + "</div>" + "</div>"
    );
  });

  $("#foto-perfil").click(function() {
    $("#button-foto-perfil").hide();
  });

  /*login*/

  $("#usuario-login-name").val();
  $("#inlineFormInputGroupUsername2").val();

  var usuario = $("#usuario-login-name").val();


  $(#enter-login).click(function(){
  if (usuario === "adrian") alert("usuario correcto");})
  
});
