$.ajax({
	method: "get",
	dataType: "json",
	url: "data/dados4.json",
	success: function(response){
		var id;
		for(var i in response.noticias){
			id=response.noticias[i].id;
			$('#noticia'+id+'').append('<div><img src="'+response.noticias[i].imagem+'"></div>');
			$('#noticia'+id+'').append('<h1'+response.noticias[i].h1+'</h1>');
			$('#noticia'+id+'').append('<h6>'+response.noticias[i].h6+'</h6');
			$('#noticia'+id+'').append('<section><p>'+response.noticias[i].noticia+'</p></section>');
			$('#noticia'+id+'').append('<div><a href="#">#mar</a><br><a href="#">#ilha</a></div>');
		}
	},
	error:function(response){
		console.log(response);
	}
});