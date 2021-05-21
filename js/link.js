let params = new URL(document.location).searchParams;
let create = params.get("create");
let createID = params.get("custom") || makeid(5);
var prop = window.location.search.substr(1);
var warn = document.querySelector(".warning-text");
var link_ref = firebase.database().ref("Link/" + createID);

if (create) {
    if (isValidHttpUrl(decodeURI(create))) {
        var link = encodeURIComponent(create);
        createLink(link);
    } else {
        showWarning(
            "The link you provided is invalid. Please recheck it and try again."
        );
    }
} else {
    if (prop) {
        goRedirect(decodeURI(prop));
    } else {
        showWarning(
            "The link you provided is invalid. Please recheck it and try again."
        );
    }
}

function goRedirect(linkid) {
    var link_ref = firebase.database().ref("Link/" + linkid);
    link_ref.once("value", function (snapshot) {
        var link = snapshot.val().href;
        window.location.replace(decodeURIComponent(link));
    });
}

function createLink(link) {
    
    link_ref.once("value", function (snapshot) {
        try {
            console.log("The url is already in use :: " + snapshot.val().link)
            showWarning("The custom name is not available, Please try again!");
        } catch (error) {
            createLINK(link);
        }
    });
}

function createLINK(clink) {
    link_ref.set({
        href: clink,
    }, function(er){
        if(!er){
            showWarning("Created custom link at " + window.location.hostname + "/link?" + createID )
        }
    });
}

function makeid(length) {
    var result = [];
    var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result.push(
            characters.charAt(Math.floor(Math.random() * charactersLength))
        );
    }
    return result.join("");
}

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}

function showWarning(text) {
    document.querySelector(".div-error").style.opacity = "1";
    warn.innerHTML = text;
}
