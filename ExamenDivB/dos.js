function mostrar()
{
    let nacionalidad,
    resultado,
    edad,
    cepa,
    conPositivos=0,
    conNegativos=0,
    conDelta=0,
    conAlfa=0,
    conBeta=0,
    conArg=0,
    mayorEdad=0;
    for(let i=0;i<8;i++){
        nacionalidad=prompt("¿De que nacionalidad es? (Arg/Extranjero)").toLocaleLowerCase();
        while(nacionalidad!="arg"&&nacionalidad!="extranjero"){
            nacionalidad=prompt("Respuesta invalida, intentelo de nuevo (Arg/Extranjero)").toLocaleLowerCase();
        }
        resultado=prompt("El resultado del hisopado es (P/N)").toLocaleLowerCase();
        while(resultado!="p"&&resultado!="n"){
            resultado=prompt("La respuesta es invalida, intentelo de nuevo (P/N)").toLocaleLowerCase();
        }
        edad=parseInt(prompt("Ingrese edad"));
        while(isNaN(edad)||edad<18||edad>65){
            edad=parseInt(prompt("Ingrese una edad valida"));
        }
        if(resultado=="p"){
            cepa=prompt("Ingrese cepa (Alfa/Beta/Delta)").toLocaleLowerCase();
            conPositivos++;
        }
        else{
            cepa="ninguna";
            conNegativos++;
        }
        switch(cepa){
            case "beta":
                conBeta++
                break;
            case "alfa":
                conAlfa++;
                break;
            default:
                if(nacionalidad=="arg"){
                    conArg++;
                }
                conDelta++;
        }
        if(edad>mayorEdad&&nacionalidad=="extranjero"){
            mayorEdad=edad;
        }
    }
    console.log("El porcentaje de positivos es: "+(conPositivos*100/8));
    console.log("El porcentaje de negativos es: "+(conNegativos*100/8));
    if(conBeta>conDelta&&conBeta>conAlfa){
        console.log("La cepa mas encontrad fue la beta");
    }
    else if(conAlfa>conDelta){
        console.log("La cepa mas encontrada fue la alfa");
    }
    else{
        console.log("La cepa mas encontrada fue la delta");
    }
    console.log("El extranjero con mayor edad tenia: "+mayorEdad);
    console.log("Argentinos contagiados con delta: "+conArg);
}