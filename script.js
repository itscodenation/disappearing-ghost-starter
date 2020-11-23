let input;

$(".hide-button").click(function(){
  $(".ghost-image").hide();
});
$(".show-button").click(function(){
  $(".ghost-image").show();
});
$(".update-img-button").click(function(){
  $(".ghost-image").attr("src", "https://media4.giphy.com/media/PntBl2BAlbfiCu9MaM/giphy.gif");
});
$(".message-button").click(function(){
    input=$("input").val();
    $(".message").append("<p>"+input+"</p>");
});

$(".name-button").click(function(){
    input=$("input").val();
    $("h1").text("My name is "+input+ " and I promise I'm not a ghost.");
});
