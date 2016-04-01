var i;
$("button").on('click',function(){
	document.getElementById('show').innerHTML = "";

	if ($(this).attr("id")=="fifa") {
		i=0;
	}else if($(this).attr("id")=="res"){
		i=1;
	}else if ($(this).attr("id")=="far"){
		i=2;
	}
	console.log(i);

	$.ajax({
		method: "get",
		dataType: "json",
		url: "data/dados3.json",
		success:function(response){
			$('#show').append('<h1>'+response.jogo[i].nome+'</h1>');
			$('#show').append('<h4>'+response.jogo[i].data+'</h4>');
			$('#show').append('<img src="'+response.jogo[i].imagem+'"/><br>');
			$('#show').append('<h5>'+response.jogo[i].nota+'</h5>');
			$('#show').append('<h4>'+response.jogo[i].descricao+'</h4>');
		},
		error:function(response){
			console.log(response);
		}
	});
});

