window.onmessage = function(e) {
    var data = JSON.parse(e.data) 
    if(data.type === "action"){
        window.actions[data.class](data.action)
    }
};

const App = {
    getJson: function(url, callback) {
        fetch(url)
        .then(response => response.json())
        .then(data => {

            if(typeof callback === "function"){
                callback(data)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}

App.getJson('../projects.json', (data)=>{

    var pdata = Object.values(data).slice(0, 3).map(item => `
        <a class="clean-i" target="_blank" href="${item.link}">
            <div class="menu-bar-item">
                <h1 class="menu-item-text">${item.title}</h1>
            </div>
        </a>
    `)

    $(".project-list-root").html(pdata.join(""))

})


App.getJson('../social.json', (data)=>{

    var pdata = Object.keys(data.links).slice(0, data.maxonmenu).map((item, index) => `
        <div class="menu-bar-item action" data-action="social@${item}">
            <h1 class="menu-item-text">${item}</h1>
        </div>
    `)

    $(".social-list-root").html(pdata.join(""))

})

