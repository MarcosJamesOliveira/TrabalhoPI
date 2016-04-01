$.ajax({
	method: "GET",
	dataType: "json",
	url: "data/dados.json",
	success: function(response){
		for(var i in response.estados){
			$('#combobox').append('<option>'+response.estados[i].nome+'</option>');
		}
	},
	error:function(response){
		console.log(response);
	}
});