$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    // var newBurger = $(this).data("newsleep");

    // var newSleepState = {
    //   sleepy: newSleep
    // };

    console.log("my id" +id);
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burger-text").val().trim(),
      devour: 0
    };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
