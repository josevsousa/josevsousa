// Os meus dados pessoais
var meus_dados = {
	nome:'José Vicente de Sousa',
	data_nascimento: '1970-12-31',
	celular: '(11) 3901-3054',
	endereco:
		{ uf: 'PB',
			cidade: 'Sousa',
			cep: '05135-380',
			bairro: 'pirituba'}
	};

function reset_input(item){
	item.parentElement.classList.remove('has-error'); 
	// $('#enviar').attr('disabled',false);
}

// input error
function error_input(item){
	$(item).parent().addClass('has-error').append('<span class="form-control-feedback">'+
				'<i class="material-icons">clear</i>'+
			'</span>');
	// $('#enviar').attr('disabled',true);
}

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

// recebe um array de id a ser limpos
function limpaForm(){	
	$('#nome, #email, #message').val('');
}


$(document).ready(function(){
	$('#bt_contato').on('click',function(){
		$('.contato_enviado').hide(); //esconde o joinha do enviado se já estiver visivel
		$('.formLoad').load('view/form.html')
	});
	
	$('.nome').text(meus_dados['nome']);
	$('.celular').text(meus_dados['celular']);

});//fim do ready
