const WebUI = {
    Element : {
        actionHide: $('.action-hide'),
        actionExeption: $('.action-x'),
        mainWindow: $('.main-window-wrap '),
    },
    action_hideElements: function(){
        this.Element.hide();
    },
    setAccentColor: function(){
        var color = localStorage.getItem("accentColor") || "#282725";
        $(':root').css('--accent', color);
    }

}

const Menubar = {
    Element : {
        itemBtn: $(".menu-item-wrap"),
        itemPopup: ".menu-item-pop",
    }
}

function registerUIEventListners(){
    WebUI.setAccentColor();
    Menubar.Element.itemBtn.click(function(){
        $(Menubar.Element.itemPopup).hide();
        $(this).find(Menubar.Element.itemPopup).show();
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest(".action-x").length === 0) {
            $(".action-hide").hide();
        }
    });


    $(document).on("dblclick click", ".app-trigger", (e) => {

        if(e.type === "dblclick"){
            var attribute = $(e.currentTarget).attr("data-app");
            window.actions.start(attribute);
        }

        if(window.matchMedia("(pointer: coarse)").matches || e.currentTarget.classList.contains("one-click")) {
            var attribute = $(e.currentTarget).attr("data-app");
            window.actions.start(attribute);
        }
    
    })
    
}

registerUIEventListners();

$( ".app-icon" ).draggable({
    containment: ".workspace-desktop",
});

$(".color-ball").click(function(){
    var color = $(this).css("background-color");
    localStorage.setItem("accentColor", color);
    WebUI.setAccentColor();
})

$(".menu-btn-mobile").click(function(){
    $(".menu-left, .menu-i, .close-i").toggle();
    
})