function mostrar()
{
	let origen,
	cantidadVac,
	totalVacAsia=0,
	totalVacUsa=0,
	totalVacEuro=0,
	precioTotal=0,
	vacTotal=0,
	conAsia=0;
	descuento=0,
	flag=0,
	costo;
	for(let i=0;i<10;i++){
		origen=prompt("Ingrese origen (asia/europa/usa)").toLocaleLowerCase();
		while(origen!="asia"&&origen!="usa"&&origen!="europa"){
			origen=prompt("origen invalida, intentelo de nuevo (asia/europa/usa)").toLocaleLowerCase();
		}
		cantidadVac=parseInt(prompt("Ingrese la cantiad de vacunas"));
		while(isNaN(cantidad)||cantidad<=0){
			cantidadVac=parseInt(prompt("cantidad invalida intentelo de nuevo"));
		}
		costo=parseInt(prompt("ingrese el costo"));
		while(isNaN(costo)||costo<1000000||costo>5000000){
			costo=parseInt(prompt("Cantidad invalida intentelo de nuevo"));
		}
		switch(origen){
			case "asia":
				totalVacAsia+=cantidadVac;
				conAsia++;
				break;
			case "usa":
				totalVacUsa+=cantidadVac;
				break;
			default:
				totalVacEuro+=cantidadVac;
		}
		precioTotal+=costo;
		vacTotal+=cantidadVac;
	}
	if(totalVacEuro>conUsa&&totalVacEuro>totalVacAsia){
		console.log("El origen que mas cantidad envio fue Europa");
	}
	else if(totalVacAsia>totalVacUsa){
		console.log("El origen que mas cantidad envio fue Asia");
	}
	else{
		console.log("El origen que mas cantidad envio fue Usa");
	}
	console.log("El promedio de vacunas por viaje llegadas desde asia es: "+(totalVacAsia/conAsia));
	console.log("El costo total de los viajes es de "+precioTotal);
	if(vacTotal>=4000000){
		descuento=precioTotal*.30;
		flag=1;
	}
	else if(vacTotal>=2000000){
		descuento=precioTotal*.20;
		flag=1;
	}
	if(flag==1){
		console.log("Hay un descuento de: "+descuento+"y el nuevo total es de: "+(precioTotal-descuento));
	}
}
