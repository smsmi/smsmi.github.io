$(function() {
	$("#input-submit").click(function() {
		$.ajax({
			method:"POST",
			url:"api/submitPost.php",
			data:{
				text:$("#input-box").val()
			},
			dataType:"json"
		}).done(function(r){
			$("#input-box").val("");
			console.log(r.response, r.error);
		});
	})
});