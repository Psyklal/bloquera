var contenedor_ventana_secundaria_descuentos=document.getElementById("contenedor_ventana_secundaria_descuentos")
var registro_flete =document.getElementById("registro_flete")

console.log(contenedor_ventana_secundaria_descuentos)
console.log(registro_flete)

var cont_primario_carrusel=document.getElementById("cont_primario_carrusel")
var cont_secundario_carrusel=document.getElementById("cont_secundario_carrusel")
var cont_terciario_carrusel=document.getElementById("cont_terciario_carrusel")

console.log(cont_primario_carrusel)
console.log(cont_secundario_carrusel)
console.log(cont_terciario_carrusel)

var barra_btn_cont_primario_carrusel=document.getElementById("barra_btn_cont_primario_carrusel")
var barra_btn_cont_secundario_carrusel=document.getElementById("barra_btn_cont_secundario_carrusel")
var barra_btn_cont_terciario_carrusel=document.getElementById("barra_btn_cont_terciario_carrusel")

var nombre_flete = document.getElementById("nombre_flete")
var apellido_flete = document.getElementById("apellido_flete")
var direccion_flete = document.getElementById("direccion_flete")
var empresa_flete = document.getElementById("empresa_flete")
var telefono_flete = document.getElementById("telefono_flete")
var correo_electronico_flete = document.getElementById("correo_electronico_flete")

// console.log("nombre_flete")
// console.log("apellido_flete")
// console.log("direccion_flete")
// console.log("empresa_flete")
// console.log("telefono_flete")
// console.log("correo_electronico_flete")

var cuerpo_contenido_inicio=document.getElementById("cuerpo_contenido_inicio")
var cuerpo_contenido_info = document.getElementById("cuerpo_contenido_info")
var cuerpo_contenido_catalogo=document.getElementById("cuerpo_contenido_catalogo")

console.log(cuerpo_contenido_inicio)
console.log(cuerpo_contenido_info)
console.log(cuerpo_contenido_catalogo)

function mostrarInicio(){
    cuerpo_contenido_inicio.style.display="flex"
    cuerpo_contenido_info.style.display="none"
    cuerpo_contenido_catalogo.style.display="none"
    cuerpo_contenido_inicio.style.animation="fadeIn .5s forwards"
}

function mostrarInfo(){
    cuerpo_contenido_inicio.style.display="none"
    cuerpo_contenido_info.style.display="flex"
    cuerpo_contenido_catalogo.style.display="none"
    cuerpo_contenido_info.style.animation="fadeIn .5s forwards"
}

function mostrarCatalogo(){
    cuerpo_contenido_inicio.style.display="none"
    cuerpo_contenido_info.style.display="none"
    cuerpo_contenido_catalogo.style.display="flex"
    cuerpo_contenido_catalogo.style.animation="fadeIn .5s forwards"
}

function mostrarDescuentos(){
    contenedor_ventana_secundaria_descuentos.style.animation="fadeIn 1.5s forwards"

    contenedor_ventana_secundaria_descuentos.style.display="flex"
    console.log(contenedor_ventana_secundaria_descuentos)

    document.addEventListener('mouseup', function(e) {
        if (!contenedor_ventana_secundaria_descuentos.contains(e.target)) {
            contenedor_ventana_secundaria_descuentos.style.display = 'none';
        }
    });

}

function ocultarDescuentos(){
    contenedor_ventana_secundaria_descuentos.style.animation="fadeOut 1.5s forwards"

    contenedor_ventana_secundaria_descuentos.style.display="none"
    console.log(contenedor_ventana_secundaria_descuentos)

}

function mostrarRegistroFlete(){
    registro_flete.style.display="flex"
    registro_flete.style.animation="fadeIn 1.5s forwards"

    document.addEventListener('mouseup', function(e) {
        if (!registro_flete.contains(e.target)) {
            registro_flete.style.display = 'none';
        }
    });
}

function ocultarRegistroFlete(){
    registro_flete.style.display="none"
    registro_flete.style.animation="fadeOut 1.5s forwards"
}

function mostrarCarruselPrimario(){

    cont_primario_carrusel.style.display="flex"
    cont_secundario_carrusel.style.display="none"
    cont_terciario_carrusel.style.display="none"

    barra_btn_cont_primario_carrusel.style.display="flex"    
    barra_btn_cont_secundario_carrusel.style.display="none"
    barra_btn_cont_terciario_carrusel.style.display="none"

    cont_primario_carrusel.style.animation="fadeIn .5s forwards"

}

function mostrarCarruselSecundario(){

    cont_primario_carrusel.style.display="none"
    cont_secundario_carrusel.style.display="flex"
    cont_terciario_carrusel.style.display="none"

    barra_btn_cont_primario_carrusel.style.display="none"    
    barra_btn_cont_secundario_carrusel.style.display="flex"
    barra_btn_cont_terciario_carrusel.style.display="none"

    cont_secundario_carrusel.style.animation="fadeIn .5s forwards"

}

function mostrarCarruselTerciario(){

    cont_primario_carrusel.style.display="none"
    cont_secundario_carrusel.style.display="none"
    cont_terciario_carrusel.style.display="flex"

    barra_btn_cont_primario_carrusel.style.display="none"    
    barra_btn_cont_secundario_carrusel.style.display="none"
    barra_btn_cont_terciario_carrusel.style.display="flex"

    cont_terciario_carrusel.style.animation="fadeIn .5s forwards"    
}

function registrarFlete(){
    nombre_flete=nombre_flete.value
    apellido_flete=apellido_flete.value
    direccion_flete=direccion_flete.value
    empresa_flete=empresa_flete.value
    telefono_flete=telefono_flete.value
    correo_electronico_flete=correo_electronico_flete.value   
    
    console.log(nombre_flete)
    console.log(apellido_flete)
    console.log(direccion_flete)
    console.log(empresa_flete)
    console.log(telefono_flete)
    console.log(correo_electronico_flete)

    if (nombre_flete!="") {
        if (apellido_flete!="") {
            if (direccion_flete!="") {
                if (empresa_flete!="") {
                    if (telefono_flete!="") {
                        if (correo_electronico_flete!="") {

                            var formData = new FormData

                            formData.append("nombre_flete",nombre_flete)
                            formData.append("apellido_flete",apellido_flete)
                            formData.append("direccion_flete",direccion_flete)
                            formData.append("empresa_flete",empresa_flete)
                            formData.append("telefono_flete",telefono_flete)
                            formData.append("correo_electronico_flete",correo_electronico_flete)

                            let peticionUsuario=new XMLHttpRequest()

                            peticionUsuario.open("POST","controlador/ejemplo_bloquera.php",true)
                            peticionUsuario.send(formData)
                            peticionUsuario.onreadystatechange=function(){
                                if (peticionUsuario.readyState==4&&peticionUsuario.status==200) {
                                    let res=peticionUsuario.response
                                    console.log(peticionUsuario.response)
                                    registro_flete.style.display="none"
                                    registro_flete.style.animation="fadeOut 1.5s forwards"
                                    alert("registro completo")                                
                                }
                            }
                        } else {
                            alert("ingresa correo")
                        }
                    } else {
                        alert("ingresa telefono")
                    }
                } else {
                    alert("ingresa empresa")
                }
            } else {
                alert("ingresa direccion")
            }
        } else {
            alert("ingresa apellido")
        }
    } else {
        alert("ingresa nombre")
    }
}

function ventanaRetroseso(){
    window.location.hash=cuerpo_contenido_inicio.style.display="flex",cuerpo_contenido_info.style.display="none",cuerpo_contenido_catalogo.style.display="none"
    window.location.hash="Again-No-back-button"
    window.onhashchange=function(){
        window.location.hash=cuerpo_contenido_inicio.style.display="flex",cuerpo_contenido_info.style.display="none",cuerpo_contenido_catalogo.style.display="none"
}
}


