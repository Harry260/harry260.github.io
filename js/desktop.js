var DesktopConfig = {}
App.getJson("apps.json", (data) => {

    DesktopConfig = data
    Desktop.init()
    window.actions.start("readme");
    actions.login();

})


const Desktop = {
    init: function() {
        const iconShelf = $(".icon-shelf");

        var icons = DesktopConfig.apps;
            const dicons = Object.values(icons).map(item =>`
                <div class="app-icon app-trigger visible-${item.desktop}" data-app="${item.id}">
                    <div class="icon-wrap center">
                        <img src="assets/icons/${validateIcon(item.icon, item.type)}" class="icon-wrap-img">
                    </div>
                    <div class="app-title h-center">
                        <h2>${item.title}</h2>
                    </div>
                </div>
            `)
           iconShelf.html(dicons.join(""))
        function validateIcon(icon, type){
            if(icon){
                return icon
            }
            else{
                return "file.png"
            }
        }

        $(".app-icon").draggable({
            containment: ".workspace-desktop",
        })
    },
    CreateWindows: function(config, callback) {


        var title = config.title ?? "Untitled",
        type = config.type,
        src = config.src;

        if(!type){
            alert("n")
            return
        }

        var window = `
            <div class="window-wrap overlay center">
                <div class="window-layer">
                    <div class="window-menu-bar v-center us">
                        <div class="thin-strip-box">
                            <div class="thin-strip"></div>
                            <div class="thin-strip"></div>
                            <div class="thin-strip"></div>
                            <div class="thin-strip"></div>
                            <div class="thin-strip"></div>
                        </div>
                        <div class="window-close center action" data-action="destroyWindows">
                            <h4 class="close-text-icon">x</h4>
                        </div>
                        <div class="window-title">
                            <h1>${title}</h1>
                        </div>
                    </div>
                    <div class="window-content">
                        <${type} src="${src}"></${type}>
                    </div>
                </div>
                
            </div>
        `

        $(".workspace-desktop").append(window)
        if(typeof config.callback === "function"){
            callback();
        }
    }
}

