
	window.onload = function() {
		
		var masculino = [],
		    feminino = [],
		    todosOsDados = [],
		    sexo = 0;

        function recolheOsDados() {
          while(sexo != 'fim' || sexo != 'Fim' || sexo != 'FIM') {

        	sexo = prompt('Qual é o seu sexo?'),
		    altura = prompt('Qual é a sua altura?');

		    if (sexo === 'M' || sexo === 'm') {
		    	masculino.push(altura);
		    } 
		    else if (sexo === 'F' || sexo === 'f') {
		    	feminino.push(altura);
		    } 
		    else {
		    	console.log('Sexo indefinido');
		    	break;
		    }
		  }
		}

		function TodasAsAlturas() {
			for (var cont = 0; cont < masculino.length; cont++) {
				todosOsDados.push(masculino[cont]);
		    }
		    for (var cont = 0; cont < feminino.length; cont++) {
		    	todosOsDados.push(feminino[cont]);
		    }
        }

		function alturaMediaGeral() {
			var soma = 0,
		        media = 0;

		    for (var cont = 0; cont < todosOsDados.length; cont++) {
                soma += Number(todosOsDados[cont]);
		    }

		    media = soma / 100;
		    return media.toFixed(3);
		}

		function maiorAlturaEncontrada() {
			var maior = todosOsDados[0];

			    for (var cont = 0; cont < todosOsDados.length; cont++) {
			    	if (maior < todosOsDados[cont]) {
			    		maior = todosOsDados[cont];
			    	}
			    }

			    return maior;
		}

		function alturaMediaFeminina() {
			var soma = 0,
			    media = 0;

			for (var cont = 0; cont < feminino.length; cont++) {
               soma += Number(feminino[cont]);
			}

			media = soma / 100;
			return media.toFixed(3);
		}

		function alturaMediaMasculina() {
			var soma = 0,
			    media = 0;

			for (var cont = 0; cont < masculino.length; cont++) {
               soma += Number(masculino[cont]);
			}

			media = soma / 100;
			return media.toFixed(3);
		}

		function quantidadeDeHomens() {
			return masculino.length;
		}

		function quantidadeDeMulheres() {
			return feminino.length;
		}


        function mostraResultados() {
        	recolheOsDados();
            TodasAsAlturas();

		    console.log('Media das alturas cadastradas ' + alturaMediaGeral());
		    console.log(maiorAlturaEncontrada());

		    console.log('Altura media das mulheres ' + alturaMediaFeminina());
		    console.log('Altura media dos homens' + alturaMediaMasculina());

		    console.log('Quantidade de homens cadastrados ' + quantidadeDeHomens());
		    console.log('Quantidade de mulheres cadastradas ' + quantidadeDeMulheres());
	    }

	    mostraResultados();

}