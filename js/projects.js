fetch('../projects.json')
    .then(response => response.json())
    .then(data => {
        ProjectInit(data)
    })
    .catch((error) => {
        console.error('Error:', error);
    });

function ProjectInit(data) {
    var items = Object.values(data).map(item => `
        <li>
            <div class="app-icon" title="${item.description}">
                <a class="clean-i" target="${item.openTarget}" href="${item.link}">
                    <div class="icon-wrap center">
                        <img src="../assets/${item.icon}" class="icon-wrap-img">
                    </div>
                    <div class="app-title h-center">
                        <h2>${item.title}</h2>
                    </div>
                </a>
                 <div class=project-link-pop overlay">
                    <a href="${item.link}" target="_blank">Launch</a>
                    <a href="${item.github}" target="_blank">Github</a>
                </div>        
            </div>
        </li>
    `)

    $(".projects-grid-wrap").html(items.join(""))
    $(".project-count").html(items.length + " Items - 69kb")
}


