window["actions"] = {
    openLink: function (url) {
        window.location.href = url;
    },
    _openLink: function (url) {
        window.open(url);
    },
    restart: function () {
        window.location.reload();
    },
    social: function(provider){

        App.getJson('../social.json', (un)=>{
            window.open(un.links[provider]);
        })
        
    },
    shutdown: function () {
        WebUI.Element.mainWindow.addClass("animate__animated animate__zoomOut")
    },

    start: function (appid) {

        this.destroyWindows()

        var x  = DesktopConfig.apps
        config ={
            title: x[appid].title,
            type: x[appid].type,
            src: x[appid].src
        }

        Desktop.CreateWindows(config)
    },
    destroyWindows: function () {
        $(".window-wrap").remove();
    },
    logout: function () {
        WebUI.Element.mainWindow.removeClass("animate__animated animate__zoomIn").addClass("animate__animated animate__zoomOut")
        $(".lock-screen").fadeIn();
    },
    login: function () {
        WebUI.Element.mainWindow.removeClass("animate__animated animate__zoomOut").addClass("animate__animated animate__zoomIn")
        $(".lock-screen").fadeOut();
    }
}

$(document).on("click", ".action", (e) => {

    try {
        e.preventDefault(); 
        console.log(e.target)
        var attribute = $(e.currentTarget).attr("data-action"),
        type = attribute.split(/@(.+)/)[0],
        action = attribute.split(/@(.+)/)[1];

        if(action === undefined){
            window.actions[type]();
            return;
        }
        window.actions[type](action);

    } catch(e){
        console.log(e)
    }
})

