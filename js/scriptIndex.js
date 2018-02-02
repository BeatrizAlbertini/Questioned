	  function corrosa(btn){
	  	if(btn.style.color == "rgb(232, 9, 46)"){
	  		btn.style.color = "#212529";
	  	} else {
	  		btn.style.color = "#e8092e";
	  	}
	  }

	  function corazul(btn){
	  	if(btn.style.color == "rgb(55, 21, 219)"){ //se a cor azul for igual ao botao estando azul
	  		btn.style.color = "#212529"; // colocar cor preta pois foi clicado
	  	} else {
	  		btn.style.color = "#3715db"; // se clicar novamente coloca cor azul
	  	}
	  }
	  function coramarelo(btn){
	  	if(btn.style.color == "rgb(255, 195, 0)"){ //se a cor azul for igual ao botao estando azul
	  		btn.style.color = "#212529"; // colocar cor preta pois foi clicado
	  	} else {
	  		btn.style.color = "#ffc300"; // se clicar novamente coloca cor azul
	  	}
	  }

function corverde(btn){
	  	if(btn.style.color == "rgb(28, 130, 5)"){ //se a cor azul for igual ao botao estando azul
	  		btn.style.color = "#212529"; // colocar cor preta pois foi clicado
	  	} else {
	  		btn.style.color = "#1c8205"; // se clicar novamente coloca cor azul
	  	}
	  }

function corroxo(btn){
	  	if(btn.style.color == "rgb(78, 21, 237)"){ //se a cor azul for igual ao botao estando azul
	  		btn.style.color = "#212529"; // colocar cor preta pois foi clicado
	  	} else {
	  		btn.style.color = "#4e15ed"; // se clicar novamente coloca cor azul
	  	}
	  }

//search



    function search() {
        let pesquisa = $('#buscar').val();
        let filter = pesquisa.toUpperCase();
        let p = $('.tituloPergunta');
        let q = $('.quadro');
        let a;

        for (i = 0; i < p.length; i++) {
            a = p[i];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                p[i].style.display = "";
                q[i].style.display = "";

            } else {
                p[i].style.display = "none";
                q[i].style.display = "none";
            }
        }
           }