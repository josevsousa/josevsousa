
	$(document).ready(function(){

	// limpar form
	$('#nome, #email, #message').val('');

	// valida nome
	$('#nome').on('click',function(){
		reset_input(this); //tira o erro
	}).blur(function(){	
		if ($(this).val() == '') {
			error_input('#nome');
		}
	});

	// valida email
	$('#email').on('click',function(){
		reset_input(this); //tira o erro
	}).blur(function(){	
		var valor = $(this).val(); //pega o email
		if ((valor == '') || (!isEmail(valor))) { //se for vazio ou se tiver erro 
			error_input('#email');
		}		
	});
	// valida message
	$('#message').on('click',function(){
		reset_input(this); //tira o erro
		}).blur(function(){	
			if ($(this).val() == '' ) {
				error_input('#message');
			}
		});

	// submit
	$('.contato').submit(function(event){
		var valido = true; //formulario valido
		var inputs = $('#contato input, #contato textarea'); //inputs

		// navega nos inputs e valida os dados
		$(inputs).each(function(){
			var valor = $(this).val();
			if(valor == ''){
				error_input('#'+$(this).attr('id'));
				valido = false;
			}else{
				// valida email
				if ($(this).attr('id') == 'email' ) {
					// email invalido
					if (!isEmail(valor)) {
						valido = false;
					}
				}
			};
		});
			
		// se o formularios tiver valido enviar ao db
		if (valido) {
			var data = {
				nome: $('#nome').val(),
				email: $('#email').val(),
				message: $('#message').val()
			}; //inputs

			// enviar ao firebase
			
			// testar se o usuario esta logdo if(logado){} 
			if (firebase.database().ref('contatos/'+data['nome']+'/').push(data)) {
				// finalizar o envio
				$('.contato').hide(600, function() {
					$('.contato_enviado').slideDown(400);
				});
			} else {
				console.log('erro no db');
			}
		}
		
			event.preventDefault();
		});

	});