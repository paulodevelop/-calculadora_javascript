var btn 	  = document.querySelectorAll(".key li"),
	input 	  = document.querySelector(".input-valor"),
	numeros  = document.querySelectorAll(".numeros");

// Percorrendo o array para usar as informações
for(var i = 0; i < btn.length; i++){
	document.onkeypress = function(){
		var key = event.keyCode;
	
		for(var e = 0; e <= 10; e++){
			if(key === (48+e)){
				input.innerHTML += e;
			}
		}
		switch (key){
			case 42:
				input.innerHTML += "*";
				break;
			case 43:
				input.innerHTML += "+";
				break;
			case 45:
				input.innerHTML += "-";
				break;
			case 46:
				input.innerHTML += ".";
				break;
			case 47:
				input.innerHTML += "/";
				break;
			case 13:
			case 61:
				var equacao = input.innerHTML;
				if(equacao){
					try {
						input.innerHTML = eval(equacao);
					} catch (e) {
						alert('Erro');

					} 
				}
				break;
			case 67:
			case 99:
				input.innerHTML = "";
				break;						
			default:
				
				break;
		}
	};
	btn[i].addEventListener('click',function(){
		var btnVal 	 = this.innerHTML,
			inputVal = input.innerHTML;
		
		// criar clear para o c se for clicado
		switch (btnVal){
			case "c":
				input.innerHTML = "";
				break;
			case "=":
				
				var equacao = inputVal;
				
				if(equacao){
					try {
						input.innerHTML = eval(equacao);
					} catch (e) {
						alert('Erro');

					} 
				}
				break;
			default:
				input.innerHTML += btnVal;
				break;	
		}

	});
}