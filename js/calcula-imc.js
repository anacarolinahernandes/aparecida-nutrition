var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdGordura = paciente.querySelector(".info-gordura");
	var gordura = tdGordura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var alturaEhValida = validaAltura(altura);
	var pesoEhValido = validaPeso(peso);
	var gorduraEhValida = validaGordura(gordura);

	if(pesoEhValido && alturaEhValida) {
		var imc = calculaImc(peso, altura);
		tdImc.textContent = imc;
	}	
}

function calculaImc(peso, altura) {
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso) {
	if(peso > 0 && peso <= 500 ) {
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if(altura > 0 && altura <= 2.5) {
		return true;
	} else {
		return false;
	}
}

function validaGordura(gordura) {
	if(gordura > 0 && gordura <= 100) {
		return true;
	} else {
		return false;
	}
}

function validaPaciente(paciente) {
	var erros = [];

	if(paciente.nome.length == 0) {
		erros.push("O nome não pode estar em branco.");		
	}

	if(paciente.peso.length == 0) {
		erros.push("O peso não pode estar em branco.");		
	}

	if(paciente.altura.length == 0) {
		erros.push("A altura não pode estar em branco.");		
	}

	if(paciente.gordura.length == 0) {
		erros.push("A gordura não pode estar em branco.");		
	}

	if(!validaPeso(paciente.peso)) {
		erros.push("Peso é inválido!");
	}

	if(!validaAltura(paciente.altura)) {
		erros.push("Altura é inválida!");
	}

	if(!validaGordura(paciente.gordura)) {
		erros.push("Gordura é inválida!");
	}

	return erros;
}
