var iframe = document.getElementById("dataconnection");
var currentVersion = "v6.5.0"
var siteSaves = [
	"viewedBlogs",
	"favorites",
	"nav",
	"themeHex",
	"gameIcon",
	"mode",
	"instantGame",
	"hotkeys",
	"minutes_played",
	"xp",
	"lvl",
	"alerts",
	"playedGames",
	"badges",
	"everyGame",
	"titles",
	"achievementCompletedCount",
	"FPSCount",
	"sgs_profile_username",
	"sgs_profile_title",
	"openSidebar",
	"tabCloak",
	"theme",
	"bannerMessageNum",
	"alwaysOnTop",
	"thumbnailtext",

	"play_10_minutes",
	"play_20_minutes",
	"play_30_minutes",
	"play_40_minutes",
	"play_50_minutes",
	"play_60_minutes",
	"play_24_hours",
	"reach_level_10",
	"reach_level_25",
	"reach_level_50",
	"reach_level_69",
	"reach_level_100",
	"play_10_games",
	"play_25_games",
	"play_50_games",
	"play_every_game",
	"read_2_blogs",
	"read_10_blogs",
]

var exclude = [
	"loadedAfterSave",
	"lstes",
	"lsgdtes",
	"lastsaved"
]

window.addEventListener("message", receiveMessage, false);

iframe.onload = function(){
	var loadedAfterSave = localStorage.getItem("loadedAfterSave") || null
	if(loadedAfterSave === "true"){
		localStorage.setItem("loadedAfterSave", "false");
		createAlertBox({ color: "green", text: "Applied Site Data", time: 8000 })
	}

	if(localStorage.getItem("lstes") === null){
		iframe.contentWindow.postMessage({ id: "fetchSiteData" }, "*")
	} else {
		iframe.contentWindow.postMessage({ id: "sendSiteData", data: siteData(), lastsaved: localStorage.getItem("lstes") }, "*")
	}

	if(localStorage.getItem("lsgdtes") === null){
		sendGameData();
	}

	iframe.contentWindow.postMessage({ id: "checkVersion", version: currentVersion }, "*")
}

function receiveMessage(event){
	if(event.origin !== "https://coruscating-shortbread-45f18a.netlify.app") return;
	// console.log(event.data)

	if(event.data.id === "updatedVersion"){
		createAlertBox({ color: "red", text: `${event.data.version} is avaiable!`, time: 3000 })
		if(!window.location.pathname.endsWith("games.html")) createAlertBox({ color: "red", text: `Download on games page`, time: 3000 })

		if(window.location.pathname.endsWith("games.html")){
			document.getElementById("mbtitle").innerText = `${event.data.version} is out! (Download)`
			document.getElementById("mbtext").innerHTML = `Unless you don't want the newest features and games, you can download the new update <a class="underline_text" onclick="window.open(${event.data.download}, '_blank')">here.</a>`
			document.getElementById("mbtext").style.width = "100%";
			document.getElementById("mbdate").innerText = `Recommended - Includes stability and fixes`
			document.getElementById("mbbtn").style.display = "none"
		}
	}

	if(event.data.id === "sendSiteData"){
		if(event.data.data === "never_saved_before"){
			iframe.contentWindow.postMessage({ id: "sendSiteData", data: siteData(), lastsaved: Date.now() }, "*")
			localStorage.setItem("lstes", Date.now())
		} else {
			var lastsaved = localStorage.getItem("lastsaved") || 1
			if(lastsaved && parseInt(event.data.lastsaved) <= parseInt(lastsaved)) return;
			for(let i = 0; i < event.data.data.length; i++){
				localStorage.setItem(event.data.data[i].key, event.data.data[i].data)
				if(i === event.data.data.length - 1){
					localStorage.setItem("lastsaved", event.data.lastsaved )
					var loadedAfterSave = localStorage.getItem("loadedAfterSave") || null
					localStorage.setItem("loadedAfterSave", "true")
					location.reload()
				}
			}
		}
	}

    // console.log(values)
	// iframe.contentWindow.postMessage(localStorage, "")
}

function sendSiteData(){
	iframe.contentWindow.postMessage({ id: "sendSiteData", data: siteData(), lastsaved: Date.now() }, "*")
	localStorage.setItem("lstes", Date.now())
}

function sendGameData(){
	iframe.contentWindow.postMessage({ id: "sendGameData", data: gameData(), lastsaved: Date.now() }, "*")
	localStorage.setItem("lsgdtes", Date.now())
}

function siteData(){
	var values = [],
    keys = Object.keys(localStorage),
    i = 0, keys;

    for(; key = keys[i]; i++){
        values.push({key: key, data: localStorage.getItem(key)});
    }

    var data = values.filter(val => siteSaves.includes(val.key))

    return data;
}

function gameData(){
	var values = [],
    keys = Object.keys(localStorage),
    i = 0, keys;

    for(; key = keys[i]; i++){
        values.push({key: key, data: localStorage.getItem(key)});
    }

    var firstpass = values.filter(val => !siteSaves.includes(val.key))
    var data = firstpass.filter(val => !exclude.includes(val.key))

    return data;
}