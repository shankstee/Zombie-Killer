function updateHeadshot(id) {

    $.ajax({
        method: "PUT",
        URL: ""
    })
    
}

function addZombie(name) {
    $.ajax({
        method: "POST",
        url: "/addone",
        data: {
            zombieName: name,
        }
    }).then(function (data) {
        console.log(data);
        window.location.reload();
    })
    
    
}

function updateZomb(id) {

    $.ajax({
        method: "PUT",
        url: "/update/" + id,
    }).then(function (data) {
        
        window.location.reload();
    })
    
}

$(document).ready(function() {
    $("#addButton").on("click", function (event) {
        event.preventDefault();
        let newZomb = $("#zombieInput").val().trim();
        console.log(newZomb)
        addZombie(newZomb);

    });

    $(".addHeadshot").on("click", function(){
        let zombID = $(this).attr("data-id");
        updateZomb(zombID);

    })



});