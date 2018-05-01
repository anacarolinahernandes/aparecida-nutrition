var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

	//Usando Regex
	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0) {
		for(var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;
			// O modificador "i" abaixo é para indicar que buscamos por case-insensitive
			var expressao = new RegExp(this.value, "i");

			if (expressao.test(nome)) {
				paciente.classList.remove("invisivel");
			} else {
				paciente.classList.add("invisivel");
			}
			
		}
	} else {
		for(var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			paciente.classList.remove("invisivel");
		}
	}
})