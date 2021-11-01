
const precio = 200


var resumen=document.querySelector(".resumen");

resumen.addEventListener('click', function(evento){
     evento.preventDefault(evento);
     var cantidad=document.querySelector(".cantidad").value;
     var descuento = document.querySelector(".descuento").value;
     var nombre = document.querySelector(".nombre").value;
     var apellido = document.querySelector(".apellido").value;
     var correo = document.querySelector(".correo").value;

     var cantidad = parseInt(cantidad)



/*******************VALIDACION DE FORMULARIO ***************/


    if(nombre.trim() == null || nombre.trim().length ==0 || !isNaN(nombre)){
        document.querySelector("#error-nombre").innerHTML = "* El nombre no es valido";
      

        return false    
    }else{

        document.querySelector("#error-nombre").style.display ="none";

    }
    if(apellido.trim() == null || apellido.trim().length ==0 || !isNaN(apellido)){
       
         document.querySelector("#error-apellido").innerHTML = "* El apellido no es valido";

        return false    
    }else{

        document.querySelector("#error-apellido").style.display ="none";

    }

      if (validarEmail(correo)) {
        document.querySelector("#error-correo").innerHTML = "*El correo no es valido";   
        return false
      }else{

         document.querySelector("#error-correo").style.display ="none";
      }



     if(cantidad == null || cantidad <= 0 || isNaN(cantidad)){


         document.querySelector("#error-cantidad").innerHTML = "* La cantidad no es valida";
        return false
   }else{

        document.querySelector("#error-cantidad").style.display ="none";

    }


/*******************CUENTA DE RESUMEN ***********************************/

    var total = descuento == "estudiante" ? 0.2 * (cantidad * precio) : 
    descuento == "trainee" ?    0.5 * (cantidad* precio) :
    descuento == "junior" ?    0.85 * (cantidad* precio):'otro numero'     
    

    var textTotal = document.querySelector(".text-total");

    document.querySelector(".precioTotal").innerHTML = total;  
    

})



function validarEmail( correo ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(correo) )

        return true;
}































    // console.log("llega aca");



    // evento.preventDefault(evento);   
    
    // console.log(precioTotal.toString())

    // evento.preventDefault(evento);



   // mostrarTotal.textContent = total;


    // mostrarTotal.innerHTML = total;

  // console.log(mostrarTotal);

// document.body.insertBefore(mostrarTotal)

            // var a = mostrarTotal.toString();

            //    console.log(a);
            //        evento.preventDefault(evento); 

     
    // var myCoolDiv = document.getElementById("MyCoolDiv");
   
 

   




   // setTimeout(() => {
   //      mostrarTotal.removeChild();
   //  }, 5000);

            // console.log("enviando formulario...");
















// function.descuento(){


// var estudiante = document.querySelectorAll(".estudiante");
// var trainee = document.querySelectorAll(".trainee");
// var junior = document.querySelectorAll(".junior");


// const precio = 200









// if (estudiante){

// 	console.log("hola")
// }




// var estudiante = document.querySelector('.estudiante');

// estudiante.addEventListener('click', function(evento){

//     console.log(evento);
//     evento.preventDefault();

//     console.log("enviando formulario...");

// })



//}



