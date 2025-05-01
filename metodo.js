function digitos(retiro) {
  if (retiro === 50000){ 
    console.log ("sacar dinero");
} else if (retiro === 100000){
    console.log ("insuficiente");
} else if(retiro <= 10){
    console.log ("sin saldo");
}else if(retiro >= 11){
console.log("saldo disponible")
}

}

digitos(10)
digitos(50000)
digitos(100000)
