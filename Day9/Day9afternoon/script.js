$(document).ready(function(){
$(document).on("keyup", function(e){
	var code = e.keyCode; 
	
	if(code === 13){
		search($("#searchbar").val()); 
		$("#searchbar").val("");
		return false;
	}
});
function search(wordSearched){
	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
		'api-key': "f75be3c0bbec4e1d9d994ea575b5ab5d",
		'q' : wordSearched
	});
	$.ajax({
		url: url,
		method: 'GET',
	}).done(function(result) {
		$("#list").html("");
		for (var i=0; i<result.response.docs.length; i++) {
			$("#list").append("<li>"+result.response.docs[i].headline.main+"</li>");
		}
	}).fail(function(err) {
		throw err;
	});	
};
});
function displayResults(results) {
	for (var i = 0; i<results.length; i++) {
 		var res = results[i];
		var div = $("<div></div>"); // Containing div
		div.addClass("article");
		var p = $("<p></p>"); // Title with link
		var a = $("<a></a>");
		a.html(res["title"]);
		a.attr("href", res["url"]);
		a.attr("target", "_blank");
		var span = $("<span></span>"); // Byline
		span.html(res["byline"]);
		span.addClass("byline");
	// Tie it all together
		p.append(a);
		div.append(p).append(span);
		$("#list").append(div);
	}
}