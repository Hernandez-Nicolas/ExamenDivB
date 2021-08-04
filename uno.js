
function mostrar()
{
	let nombre,
	edad,
	tipo,
	dosis,
	sexo,
	edadesVacRusa=0,
	conVacRusa=0,
	conVacChina=0,
	conVacAmericana=0,
	mayoresEdadVacAmericana=0,
	conDosisS=0,
	nomMujerMasEdad,
	edadMujerMasEdad=0,
	vacMujerMasEdad,
	conVacunas=0,
	continuar;
	do{
		nombre=prompt("Ingrese el nombre del vacunado:");
		edad=parseInt(prompt("Ingrese la edad del vacunado:"));
		while(isNaN(edad)||edad<12){
			edad=parseInt(prompt("Edad invalida, debe tener minimo 12 años"));
		}
		if(edad<=17&&edad>=12){
			tipo="americana";
		}
		else{
			tipo=prompt("Ingrese el tipo de vacuna (Rusa/China/Americana)").toLocaleLowerCase();
			while(tipo!="rusa"&&tipo!="china"&&tipo!="americana"){
				tipo=prompt("Ingrese un tipo valido (Rusa/China/Americana)").toLocaleLowerCase();
			}
		}
		dosis=prompt("¿Que dosis se dara? (P=primera/S=segunda").toLocaleLowerCase();
		while(dosis!="p"&&dosis!="s"){
			dosis=prompt("Respuesta invalida (P=primera/S=segunda").toLocaleLowerCase();
		}
		sexo=prompt("Ingrese el sexo (F/M)").toLocaleLowerCase();
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("Sexo invalido (F/M)").toLocaleLowerCase();
		}
		switch(tipo){
			case "rusa":
				conVacRusa++;
				edadesVacRusa+=edad;
				break;
			case "china":
				conVacChina++;
				break;
			default:
				conVacAmericana++
				mayoresEdadVacAmericana++
		}
		if(dosis=="S"){
			conDosisS++;
		}
		if(sexo=="f"&&edad>edadMujerMasEdad){
			edadMujerMasEdad=edad;
			vacMujerMasEdad=tipo;
			nomMujerMasEdad=nombre;
		}
		conVacunas++;
		continuar=prompt("¿Quiere seguir ingresando vacunados? (Si/No)").toLocaleLowerCase();
	}while(continuar=="si")
	console.log("El promedio de edad de la vacuna rusa es: "+(edadesVacRusa/conVacRusa));
	console.log("El nombre de la mujer con mas edad es "+nomMujerMasEdad+" y uso la vacuna "+vacMujerMasEdad);
	console.log("El porcentaje de mayores de edad de la vacuna americana es: "+(mayoresEdadVacAmericana*100/conVacAmericana)+"%");
	console.log("El porcentaje de vacunados con la segunda dosis es:"+(conDosisS*100/conVacunas));
	if(conVacRusa>conVacChina&&conVacRusa>conVacAmericana){
		console.log("La vacuna mas usada fue la rusa");
	}
	else if(conVacAmericana>conVacChina){
		console.log("La vacuna mas usada fue la americana");
	}
	else{
		console.log("La vacuna mas usada fue la china");
	}
}
