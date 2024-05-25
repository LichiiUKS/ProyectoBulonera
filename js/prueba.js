function cambiarBotones(opcion)
{
    // Ocultar todos los botones
    document.getElementById("boton1").style.display = "none";
    document.getElementById("boton2").style.display = "none";
    document.getElementById("boton3").style.display = "none";
    document.getElementById("boton4").style.display = "none";
    document.getElementById("boton5").style.display = "none";
    
    // Mostrar los botones correspondientes a la opción seleccionada
    switch(opcion)
    {
      case "opcion1":
        document.getElementById("boton1").style.display = "block";
        document.getElementById("boton2").style.display = "block";
        document.getElementById("boton3").style.display = "none";
        document.getElementById("boton4").style.display = "none";
        document.getElementById("boton5").style.display = "none";
        break;
      case "opcion2":
        document.getElementById("boton4").style.display = "block";
        document.getElementById("boton5").style.display = "block";
        break;
        case "opcion3":
        document.getElementById("boton3").style.display = "none";
        document.getElementById("boton4").style.display = "none";
        document.getElementById("boton5").style.display = "none";
        break;
      }
}