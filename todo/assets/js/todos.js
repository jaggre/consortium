//toggle todos
$( "ul" ).on("click","li", function(){
 $(this).toggleClass("completed");
});
//clicked to delete
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//listener 
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //get todo from input
        var todoText = ($(this).val());
        $(this).val("")
        //create new li, add to ul
        $("ul").append("<li><i class='fa fa-trash'> </i>"+ todoText +"</li>")
    }
});

// fa icon selector
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})