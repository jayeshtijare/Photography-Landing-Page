function enter(){
    // console.log("hey");
    $("#landing").css("transform", "translate(-200vw)");
    $(".dimmed").css("visibility", "visible");
    $(".dimmed").css("transform", "translate(0)");

    $("#first").css("opacity", "1");
    $("#page").css("visibility", "visible");
    $("#page").css("overflow", "auto");//visible
    $("#page").css("max-height", "auto");

    $("#register").css("transform", "translate(0)");

    $("#visible-sec").mouseenter(function(){ openForm();});
}

function openForm(){
    $("#register").css("transform", "translate(-600px)");
    $("#register").css("transition-delay","0s");
    $("#register").css("z-index","4");

    $("#con-num").css("opacity","0");
    $("#reg").css("opacity","0");

    $("#empty-section").mouseenter(function(){ closeForm(); });
    $("#form-sec").mouseleave(function(){ closeForm(); });
}
function closeForm(){
    $("#register").css("transform", "translate(0px)");
    $("#register").css("transition-delay","0s");
    $("#register").css("z-index","0");
    $("#con-num").css("opacity","1");
    $("#reg").css("opacity","1");

}

(function manageTotalUsers() {

    let totalUsers = String(getRandom(100000, 200000));
    totalUsers = addComma(totalUsers);

    addToTotalUsers(totalUsers);

    function addToTotalUsers(currentValue) {
        let num = Number(currentValue.replace(",", ""));
        num++;
        num = String(num);
        num = addComma(num);
        document.getElementById("ourUsers").innerHTML = num;
        // $("#ourUsers").html(num)
        setTimeout(function() {
            addToTotalUsers(num);
        }, getRandom(1000, 4000));
    }

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function addComma(num) {
        return num.slice(0, 3) + "," + num.slice(3, 6);
    }

})();
