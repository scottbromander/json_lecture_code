$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/mylittleponies",
      success: function(batman){
        appendDom(batman);
      }
    });

    $(".people").on("click", ".delete", function(){
        $(this).parent().remove();
    });
});

function appendDom(data){
    console.log(data.name);

    $(".people").append("<div class='user-profile'></div>");

    var $el = $(".people").children().last();
    $el.append("<img src='" + data.imgURL + "'>");
    $el.append("<p>" + data.name + "</p>");
    $el.append("<h6>" + data.phonenumber + "</h6>");
    $el.append("<p>" + data.accounts.savings + "</p>");
    $el.append("<button class='btn btn-info delete'>Delete</button>");
}
