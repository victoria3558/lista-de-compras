$(document).ready(function(e) {
  $("#btnañadir").click(function(event) {
    var elemento = $("#elemento").val();
    if (elemento == "") {
      console.log("El elemento no existe");
    } else {
      $("li:last").after('<li class="list-group-item">' + elemento + '</li>');
      $("#elemento").val('');
    }
    event.preventDefault();
  });

  $("ul").on('click', 'li', function() {
    var badge = $(this).children('badge'); //todos los elementos de badge
    var contador = parseInt('badge.html()');
    if (contador == 0){
      badge.html(contador + 1);
    }else{
      badge.html('0');
    }

    $(this).toggleClass('active');
  });

  $("ul").on('click', 'button',function(event) {

    var badge = $(this).siblings('.badge');// cambia el hermano del boton que esta dentro del li
    var contador = parseInt(badge.html());
    if (contador==0){
     $(this).parent('li').addClass('active');
    }

    badge.html(contador + 1);
    
    return false; // para que noi se propague

    /* Act on the event */
  });
});
