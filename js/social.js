App.getJson('../social.json', (data)=>{

    var pdata = Object.keys(data.links).map(item => `
    <li>
        <div class="app-icon">
            <a href="${data.links[item]}" target="_blank" class="clean-i">
                <div class="icon-wrap center">
                    <img src="../assets/icons/${item}.png" class="icon-wrap-img">
                </div>
                <div class="app-title h-center">
                    <h2>${item}</h2>
                </div>
            </a>
        </div>
    </li>
        
    `)

    $(".social-list-wrap").html(pdata.join(""))
    $(".social-count").html(pdata.length  + " Items - 109kb")
})