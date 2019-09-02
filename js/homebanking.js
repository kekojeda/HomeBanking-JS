//Declaración de variables
var nombreUsuario = "Sergio Ojeda";
var saldoCuenta = 200;
var limiteExtraccion = 100;

var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;

var codSeguridad = 1234;
var dni = 1;


function resetPassword(dniIngresado){
    if(dni == dniIngresado){
        var strNuevoCodSeguridad = prompt("Ingrese el nuevo limite de extraccion");
        codSeguridad= parseInt(strNuevoLimite);
        alert("se cambio el código");
    }else{
        alert("el dni es incorrecto");
    }

}

var cuentasAmigas = ["111222", "222111", "333444"];


iniciarSesion();

function sumarDinero(cantDinero) {
    saldoCuenta += cantDinero;
}
function restarDinero(cantDinero) {
    saldoCuenta -= cantDinero;
}

function hayDineroDisponible(cantDinero) {
    if ((saldoCuenta - cantDinero) >= 0) {
        return true;
    } else {
        return false;
    }
}

function ingresoNull(cantDinero){
    if (cantDinero == null) {
        return true;
    } else {
        return false;
    }
}

function hayLimiteDeExtraccion(cantDinero) {
    if (cantDinero <= limiteExtraccion) {
        return true;
    } else {
        return false;
    }

}

function esMultiploDe100(cantDinero) {
    if (cantDinero % 100 == 0) {
        return true;
    } else {
        return false;
    }
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var strNuevoLimite = prompt("Ingrese el nuevo limite de extraccion");
    var nuevoLimite = parseInt(strNuevoLimite);
    limiteExtraccion = nuevoLimite;
    actualizarLimiteEnPantalla();
    alert("El limite de extraccion se cambio correctamente. \n El nuevo limire de extraccion es " + limiteExtraccion);

}

function extraerDinero() {
    var stringCantDineroRetirar = prompt("Ingrese la cantidad de dinero que desea retirar");
    var cantDineroRetirar = parseInt(stringCantDineroRetirar);
    if (esMultiploDe100(cantDineroRetirar)) {
        if (hayLimiteDeExtraccion(cantDineroRetirar)) {
            if (hayDineroDisponible(cantDineroRetirar)) {
                var saldoAnterior = saldoCuenta;
                restarDinero(cantDineroRetirar);
                actualizarSaldoEnPantalla();
                alert("Retiraste: " + cantDineroRetirar + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
            } else {
                alert("No posee saldo suficiente en su cuenta. \n Su saldo es " + saldoCuenta);
            }

        } else {
            alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion. \n Tu limite de extraccion actual es de $" + limiteExtraccion);
        }
    } else {
        alert("Solo puede extraer billetes de $100 \n intente con $100, $200, $500, etc.");
    }

}

function depositarDinero() {
    var stringCantDineroDepositar = prompt("Ingrese la cantidad de dinero que desea depositar");
    var cantDineroDepositar = parseInt(stringCantDineroDepositar);
    //comprueba que la cantidad ingresada sea valida
    if(cantDineroDepositar){
        var saldoAnterior = saldoCuenta;
    sumarDinero(cantDineroDepositar);
    actualizarSaldoEnPantalla();
    alert("Depositaste: " + cantDineroDepositar + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
    }else{
        alert("Hubo un error o si ingreso un valor no valido, intentelo nuevamente.");
    }
    
}

function pagarServicio() {
    var strOpcion = prompt("Ingrese el numero que corresponda al servicio que desee pagar. \n 1 - Agua \n 2 - Telefono \n 3 - Luz \n 4 - Internet");
    var opcion = parseInt(strOpcion);
    var saldoAnterior = saldoCuenta;
    switch (opcion) {
        case 1:
            if (hayDineroDisponible(precioAgua)) {
                restarDinero(precioAgua);
                actualizarSaldoEnPantalla();
                alert("Has pagado correctamente el servicio AGUA.\n Saldo Anterior: " + saldoAnterior + "\n Dinero Descontado: " + precioAgua + "\n Saldo Actual: " + saldoCuenta);
            } else {
                alert("no hay suficiente saldo en tu cuenta para pagar este servicio");
            }
            break;
        case 2:
            if (hayDineroDisponible(precioTelefono)) {
                restarDinero(precioTelefono);
                actualizarSaldoEnPantalla();
                alert("Has pagado correctamente el servicio TELEFONO.\n Saldo Anterior: " + saldoAnterior + "\n Dinero Descontado: " + precioTelefono + "\n Saldo Actual: " + saldoCuenta);
            } else {
                alert("no hay suficiente saldo en tu cuenta para pagar este servicio");
            }
            break;
        case 3:
            if (hayDineroDisponible(precioLuz)) {
                restarDinero(precioLuz);
                actualizarSaldoEnPantalla();
                alert("Has pagado correctamente el servicio LUZ.\n Saldo Anterior: " + saldoAnterior + "\n Dinero Descontado: " + precioLuz + "\n Saldo Actual: " + saldoCuenta);
            } else {
                alert("no hay suficiente saldo en tu cuenta para pagar este servicio");
            }
            break;
        case 4:
            if (hayDineroDisponible(precioInternet)) {
                restarDinero(precioInternet);
                actualizarSaldoEnPantalla();
                alert("Has pagado correctamente el servicio INTERNET.\n Saldo Anterior: " + saldoAnterior + "\n Dinero Descontado: " + precioIntrnet + "\n Saldo Actual: " + saldoCuenta);
            } else {
                alert("no hay suficiente saldo en tu cuenta para pagar este servicio");
            }
            break;
        default:
            alert("No se encuentra el servicio");
    }

}
/* Vieja sin for
function transferirDinero() {
    var stringCantDineroTransferir = prompt("Ingrese la cantidad de dinero que desea transferir");
    var cantDineroTransferir = parseInt(stringCantDineroTransferir);
    if (hayDineroDisponible(cantDineroTransferir)) {
        var cuentaDestino = prompt("Ingrese el numero de cuenta de Destino");
        if (cuentaDestino == cuentaAmiga1 || cuentaDestino == cuentaAmiga2) {
            restarDinero(cantDineroTransferir);
            actualizarSaldoEnPantalla();
            alert("Se han transferido " + cantDineroTransferir + "\n Cuenta destino: " + cuentaDestino + "\n Saldo actual: " + saldoCuenta);
        } else {
            alert("solo puede transferirse dinero a una cuenta amiga");
        }
    } else {
        alert("no puede transferirse esa cantidad de dinero. Su saldo no es suficiente")
    }
}
*/

function transferirDinero() {
    var existeCuenta = false;
    var stringCantDineroTransferir = prompt("Ingrese la cantidad de dinero que desea transferir");
    var cantDineroTransferir = parseInt(stringCantDineroTransferir);
    if (hayDineroDisponible(cantDineroTransferir)) {
        var cuentaDestino = prompt("Ingrese el numero de cuenta de Destino");
        for (i = 0; i < cuentasAmigas.length; i++) {
            if (cuentasAmigas[i] == cuentaDestino) {
                restarDinero(cantDineroTransferir);
                actualizarSaldoEnPantalla();
                alert("Se han transferido " + cantDineroTransferir + "\n Cuenta destino: " + cuentaDestino + "\n Saldo actual: " + saldoCuenta);
                var existeCuenta = true;
            }
        }
        if (existeCuenta == false) {
            alert("Solo puede transferirse dinero a una cuenta amiga");
        }
    } else {
        alert("no puede transferirse esa cantidad de dinero. Su saldo no es suficiente")
    }
}

function iniciarSesion() {
    var contador = 1;
    while (contador<=3){
        var codSignIn = prompt("Ingrese su codigo de seguridad");
        if (codSignIn == codSeguridad) {
            alert("Bienvenido " + nombreUsuario + ", ya puedes comenzar a realizar operaciones");
            contador = 5;
        } else {
            alert("Código Incorrecto. " + contador + " de 3 intentos \n")
            contador++;
            if (contador >3){
                saldoCuenta = 0;
                actualizarSaldoEnPantalla;
                alert("Código Incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
            }
           
        }
    }
  

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}