$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados2.json",
	success: function(response){
		for(var i in response.imagens){
			$('#img').append('<img src="'+response.imagens[i].imagem+'"/>');
		}
	},
	error:function(response){
		console.log(response);
	}
});