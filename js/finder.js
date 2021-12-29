$(document).on("dblclick click", ".finder-icon", (e) => {

    var attribute = $(e.currentTarget).attr("data-action");

    if(e.type === "dblclick"){
        start(attribute);
    }

    if(window.matchMedia("(pointer: coarse)").matches || e.currentTarget.classList.contains("one-click")) {
        start(attribute);
    }

    function start(act){
        var config = JSON.stringify({
            class: act.split(/@(.+)/)[0],
            type: "action",
            action: act.split(/@(.+)/)[1]
        })
        console.log(config)
        window.top.postMessage(config, '*')
    }
})