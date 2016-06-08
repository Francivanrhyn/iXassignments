$(document).ready(function(){

	addToDiv();

	addTitle();
	
	$('.get-selected').click(function() {
		getSelected();
	});

	$(".text-changer").click(function(){
		changeText();
	});	
});


// change the color of the text in the div with class "color-div" to red 
function changeColor() {
	$(".color-div").css("color","red")
}



// add the word "blue" to the div with class "add-div" 
function addToDiv() {

var body = 'My favourite color is blue';
$('.add-div').html(body);
}



// add a title to the page 
function addTitle() {
    $(".title-div").html("<h1>Title</h1>");
    }


// alert the text in the selected item of the dropdown
function getSelected() {
    var selected = $('#selector option:selected');
    alert(selected.html()); 
}



// change the title to be "New Title"
function changeText() {
    $(".title-div").html("<h1>New Title</h1>");
}




$(document).ready(function() {
	$(".the-button").click(function(){
		changeColor();
	});
	


  $(".trio").click(function (e) {
    //hint: look at the currentTarget property
 	 $(".clicked-id").html("You clicked on id:"+ $(this).attr("id"));
  });

})



