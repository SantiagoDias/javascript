function validainputs (){
    let email=document.getElementById("email");// baja info
    let password=document.getElementById("password")// baja info
    let ingreso=document.getElementById("login");//baja info
    let emailval= email.value.trim();// eliminar espacios innecesarios
    let passwordval= password.value.trim();
    let passwordok="a12345"; // clave real ingreso
    // SECCION DE VALIDA DE CAMPOS FORMULARIO CAMPO X CAMPO
    var errorf=0;// si no ocurre error = 0
    //VALIDAR EMAIL
    if (emailval ===""){
        ocErrorform(email,"Por favor ingrese su email..");
        errorf=1;// OCURRE EVENTO ERROR =1
        }
        else if (!valEmail(emailval)){
            ocErrorform(email,"Email no valido");
            errorf=1;// OCURRE EVENTO ERROR =0
        }
        else{
            exitosform(email);
        }
        // VALIDAR CONTRASEÑA INGRESAR
        if (passwordval ===""){
            ocErrorform(password,"Por favor ingrese su contraseña");
            errorf=1;// OCURRE EVENTO ERROR =0
        }
        else if(passwordval!=passwordok){
            ocErrorform(password,"Contraseña no valida");
            errorf=1;// OCURRE EVENTO ERROR =0
        }else{
            exitosform(password);
        }
        // SECCIO DE INGRESO EXITOSO EN CAMPOS FORM
        if (errorf==0){
            ingreso.addEventListener('click',function(){
            swal("ACCESO PERMITIDO !!", "Click OK para continuar", "success");
            })
        }
        return false;
        // FUNCION PARA VALIDAR ERRORES
        swal("ACCESO PERMITIDO !!", "Click OK para continuar", "success");
// función para validar errores en formularios
    function ocErrorform (input, message){
       let formControl=input.parentElement;
       let small=formControl.querySelector("small");
       formControl.className="form-control error";
       small.innerText =message; 
    }
    // función para ingreso exitoso en formularios
    function exitosform (input){
        let formControl=input.parentElement;
            formControl.className="form-control success";
        }
    function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
    }

    
    
    

    


}
