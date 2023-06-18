/*********************************************/
/*         Nuria Rueda Reina                 */
/*********************************************/

function validar(){

    let nombre=document.getElementById('nombre');
    let contraseña=document.getElementById('contraseña');
    let correo=document.getElementById('correo');
    let correo2=document.getElementById('correo2');
    let anyo=document.getElementById('anyo');
    let provincia=document.getElementById('provincia');
    let check=document.getElementById('check');
    let correcto=true;  

    //NOMBRE
    if (nombre.value.length==0) {
        correcto=false;
        nombre.style.borderColor="red";
        document.getElementById("errorNombre").style.visibility="visible";
    }
    
    //CONTRASEÑA
    regexp_contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    if (!regexp_contraseña.test(contraseña.value)) { 
        correcto=false;
        contraseña.style.borderColor="red";
        document.getElementById("errorContraseña").style.visibility="visible";
    }

    //CORREO
    regexp_correo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    if (!regexp_correo.test(correo.value)) { 
        correcto=false;
        correo.style.borderColor="red";
        document.getElementById("errorCorreo").style.visibility="visible";
    }

    //COMPROBAR QUE AMBOS CORREOS SON IGUALES
    if(correo.value!==correo2.value){
        correcto=false;
        correo2.style.borderColor="red";
        document.getElementById("errorCorreo2").style.visibility="visible";
    } 

    //PARA LOS INTERVALOS DE LOS AÑOS
    if (isNaN(anyo.value) || anyo.value<2015 || anyo.value>2023 ) {
        correcto=false;
        anyo.style.borderColor="red";
        document.getElementById("errorAnyo").style.visibility="visible";
    }

    //PROVINCIA
    if (provincia.value==0){ 
        correcto=false;
        provincia.style.borderColor="red";
        document.getElementById("errorProvincia").style.visibility="visible";
    }

    //CHECK DE LOS TÉRMINOS DE PRIVACIDAD
    if (!check.checked){
        correcto=false
        check.style.borderColor="red";
        document.getElementById("errorCheck").style.visibility="visible";
    }

    return correcto;

}

function quitarError(nodo,id){
     nodo.style.borderColor="lightgray";
     document.getElementById(id).style.visibility="hidden";
}
 


