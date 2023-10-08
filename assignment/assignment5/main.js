var post = 0;
function postFunction() {
    var name = document.getElementById("text1").value;
    
    if (post == 0) {
        document.getElementById("topic1").innerHTML = name;
        post++;
    }
    else if (post == 1) {
        document.getElementById("comment1").innerHTML = name;
        post++;
    }
    else if (post == 2) {
        document.getElementById("comment2").innerHTML = name;
        post++;
    }
    if (post == 3) {
        post = 0;
    }
}

function clearFunction() {
    var clearInfo;
    clearInfo = document.getElementById("topic1").innerHTML = "Topic Reac Here";
    clearInfo = document.getElementById("comment1").innerHTML = "Comment1 Reac Here";
    clearInfo = document.getElementById("comment2").innerHTML = "Comment2 Reac Here";
}