


const handleClick = () =>{
    console.log("funciona")
}

const sumarNumeros = () =>{
    let numero1 = parseFloat(document.getElementById("num1").value);
    let numero2 = parseFloat(document.getElementById("num2").value);
    let suma = numero1 + numero2;
    let resultado = document.getElementById("resultado");
    resultado.textContent = suma;
     
}