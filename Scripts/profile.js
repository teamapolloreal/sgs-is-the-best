const achievement_data = [
    {
        name: "Play Games for 10 Minutes",
        id: "play_10_minutes",
        reward: "500xp",
        progress: null,
        progress_info: { a: "minutes_played", b: 10, xp: 500 }
    },
    {
        name: "Play Games for 20 Minutes",
        id: "play_20_minutes",
        reward: "750xp",
        progress: null,
        progress_info: { a: "minutes_played", b: 20, xp: 750 }
    },
    {
        name: "Play Games for 30 Minutes",
        id: "play_30_minutes",
        reward: "1000xp + \"Certified Pro Gamer\" Title",
        progress: null,
        progress_info: { a: "minutes_played", b: 30, xp: 1000, title: "Certified Pro Gamer", t_id: "certified_pro_gamer" }
    },
    {
        name: "Play Games for 40 Minutes",
        id: "play_40_minutes",
        reward: "1250xp",
        progress: null,
        progress_info: { a: "minutes_played", b: 40, xp: 1250 }
    },
    {
        name: "Play Games for 50 Minutes",
        id: "play_50_minutes",
        reward: "1500xp",
        progress: null,
        progress_info: { a: "minutes_played", b: 50, xp: 1500 }
    },
    {
        name: "Play Games for 60 Minutes",
        id: "play_60_minutes",
        reward: "2000xp + \"bro im dead 💀\" Title",
        progress: null,
        progress_info: { a: "minutes_played", b: 60, xp: 2000, title: "bro im dead 💀", t_id: "bro_im_dead" }
    },
    {
        name: "Play Games for 24 Hours",
        id: "play_24_hours",
        reward: "20000xp + <img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/3.png' class='img-emoji2'> Badge",
        progress: null,
        progress_info: { a: "minutes_played", b: 1440, xp: 20000, b_id: "3" }
    },
    {
        name: "Reach Level 10",
        id: "reach_level_10",
        reward: "1000xp + \"Pro Gamer\" Title",
        progress: null,
        progress_info: { a: "reach_level", b: 10, xp: 1000, title: "Pro Gamer", t_id: "pro_gamer" }
    },
    {
        name: "Reach Level 25",
        id: "reach_level_25",
        reward: "2500xp + \"Absolutely Cracked\" Title",
        progress: null,
        progress_info: { a: "reach_level", b: 25, xp: 2500, title: "Absolutely Cracked", t_id: "absolutely_cracked" }
    },
    {
        name: "Reach Level 50",
        id: "reach_level_50",
        reward: "5000xp + \"Legit Hacker\" Title",
        progress: null,
        progress_info: { a: "reach_level", b: 50, xp: 5000, title: "Legit Hacker", t_id: "legit_hacker" }
    },
    {
        name: "Reach Level 69",
        id: "reach_level_69",
        reward: "6969xp + <img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/4.png' class='img-emoji2'> Badge!",
        progress: null,
        progress_info: { a: "reach_level", b: 69, xp: 6969, b_id: "4" }
    },
    {
        name: "Reach Level 100",
        id: "reach_level_100",
        reward: "10000xp + <img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/2.png' class='img-emoji2'> Badge!",
        progress: null,
        progress_info: { a: "reach_level", b: 100, xp: 10000, b_id: "2" }
    },
    {
        name: "Play 10 Different Games",
        id: "play_10_games",
        reward: "250xp",
        progress: null,
        progress_info: { a: "play_games", b: 10, xp: 250 }
    },
    {
        name: "Play 25 Different Games",
        id: "play_25_games",
        reward: "500xp",
        progress: null,
        progress_info: { a: "play_games", b: 25, xp: 500 }
    },
    {
        name: "Play 50 Different Games",
        id: "play_50_games",
        reward: "1000xp + \"what the dog doin'\" Title",
        progress: null,
        progress_info: { a: "play_games", b: 50, xp: 1000, title: "what the dog doin' 🐶", t_id: "what_the_dog_doin" }
    },
    {
        name: "Play Every Single Game",
        id: "play_every_game",
        reward: "1250xp + <img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/1.png' class='img-emoji2'> Badge!",
        progress: null,
        progress_info: { a: "play_games", b: 160, xp: 1250, b_id: "1" }
    },
    {
        name: "Read 2 Blogs or Logs",
        id: "read_2_blogs",
        reward: "100xp + \"not reading allat🤦‍🤣\" Title",
        progress: null,
        progress_info: { a: "read_blogs", b: 2, xp: 100, title: "not reading allat🤦‍♂️🤣", t_id: "not_reading_allat" }
    },
    {
        name: "Read 10 Blogs or Logs",
        id: "read_10_blogs",
        reward: "250xp + <img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/5.png' class='img-emoji2'> Badge!",
        progress: null,
        progress_info: { a: "read_blogs", b: 10, xp: 250, b_id: "5" }
    },
]

const removed_games = [
    "incredibox"
]

loadProfile();
function loadProfile(){
    checkXP();
    if(!document.getElementById("usernameInputProfile")) return;
    var username = localStorage.getItem("sgs_profile_username")
    var title = localStorage.getItem("sgs_profile_title")
    document.getElementById("usernameInputProfile").value = username
    document.getElementById("profileTitle").innerText = title || "Noobie Gamer"

    var badges = localStorage.getItem("badges") || null
    var badgesInclude = ""
    if(badges && badges.includes("2")) badgesInclude = badgesInclude + "<img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/2.png' class='img-emoji'>";
    if(badges && badges.includes("3")) badgesInclude = badgesInclude + "<img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/3.png' class='img-emoji'>";
    if(badges && badges.includes("4")) badgesInclude = badgesInclude + "<img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/4.png' class='img-emoji'>";
    if(badges && badges.includes("1")) badgesInclude = badgesInclude + "<img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/1.png' class='img-emoji'>";
    if(badges && badges.includes("5")) badgesInclude = badgesInclude + "<img src='https://raw.githubusercontent.com/SyceProjects/sgs-gitcdn/main/Images/5.png' class='img-emoji'>";
    if(username) document.getElementById("profileUsername").innerHTML = `${username} ${badgesInclude}`;
    if(!username) document.getElementById("profileUsername").innerHTML = `No Username Set ${badgesInclude}`;

    var options = document.getElementById("titleInputProfile").getElementsByClassName("settingsSelectOption")
    Array.from(options).forEach(option => {
        if(option.textContent !== "Noobie Gamer") option.remove()
    })

    var titles = localStorage.getItem("titles") || null
    if(titles && titles.includes("pro_gamer")) addTitle("Pro Gamer")
    if(titles && titles.includes("certified_pro_gamer")) addTitle("Certified Pro Gamer")
    if(titles && titles.includes("absolutely_cracked")) addTitle("Absolutely Cracked")
    if(titles && titles.includes("legit_hacker")) addTitle("Legit Hacker")
    if(titles && titles.includes("bro_im_dead")) addTitle("bro im dead 💀")
    if(titles && titles.includes("what_the_dog_doin")) addTitle("what the dog doin'")
    if(titles && titles.includes("not_reading_allat")) addTitle("not reading allat🤦‍♂️🤣")

    function addTitle(id){
        var select = document.getElementById("titleInputProfile")
        var opt = document.createElement("option")
        opt.className = "settingsSelectOption"
        opt.value = id
        opt.innerHTML = id
        select.appendChild(opt)
    }

    var lvl = localStorage.getItem("lvl") || 1
    var xp = localStorage.getItem("xp") || 0
    document.getElementById("profileLvlXP").innerHTML = `Level: ${lvl} - Experience: ${xp}/${75 * lvl}`

    var games_played = localStorage.getItem("playedGames") || null
    if(!games_played){
        document.getElementById("games_played_text").innerText = `0/160`
        document.getElementById("games_played").setAttribute("stroke-dasharray", "0, 100")
    } else {
        document.getElementById("games_played_text").innerText = `${games_played.split("||").length - 1}/160`
        document.getElementById("games_played").setAttribute("stroke-dasharray", Math.trunc((games_played.split("||").length - 1) / 160 * 100) + ", 100")
    }

    var minutes_played = parseInt(localStorage.getItem("minutes_played")) || 0
    var hours = Math.trunc(minutes_played / 60)
    var mins = minutes_played - hours * 60
    if(hours === 1){ s = "" } else { s = "s" }
    document.getElementById("minutes_played_text").innerText = `Time Played: ${hours} hr${s}, ${mins} min`

    var achievementsCompleted = parseInt(localStorage.getItem("achievementCompletedCount")) || 0
    document.getElementById("achievements_completed_text").innerText = `${achievementsCompleted}/${achievement_data.length}`
    document.getElementById("achievements_completed").setAttribute("stroke-dasharray", Math.trunc(achievementsCompleted / achievement_data.length * 100) + ", 100")

    var badgesEarned = localStorage.getItem("badges") || ""
    document.getElementById("badges_earned_text").innerText = `${badgesEarned.split(" || ").length - 1}/5`
    document.getElementById("badges_earned").setAttribute("stroke-dasharray", Math.trunc((badgesEarned.split(" || ").length - 1) / 5 * 100) + ", 100")
    badges_earned_text
}

function editProfile(boolean){
    var edit1 = document.getElementById("usernameInputProfile")
    var edit2 = document.getElementById("titleInputProfile")

    var ddl = document.getElementById("titleInputProfile");
    if(ddl !== null){
        var opts = ddl.options.length
        for(var i = 0; i < opts; i++){
            if(ddl.options[i].value == localStorage.getItem("sgs_profile_title")){
                ddl.options[i].selected = true;
                break;
            }
        }
    }

    var show = "none"
    if(boolean === true) show = "block"
    edit1.style.display = show
    edit2.style.display = show

    document.getElementById("profileEdit").onclick = function(){ editProfile(false) }

    if(boolean === false){
        document.getElementById("profileEdit").onclick = function(){ editProfile(true) }
        loadProfile();
        sendSiteData();
    }
}

var titleSelect = document.getElementById("titleInputProfile")
if(titleSelect){
    titleSelect.addEventListener("change", function(event){
        if(localStorage.getItem("sgs_profile_title") === null){
            localStorage.setItem("sgs_profile_title", "Noobie Gamer");
        }
        localStorage.setItem("sgs_profile_title", event.target.value);
        document.getElementById("profileTitle").innerText = event.target.value
        // saveSiteData();
    })
}

function inputUsername(){
    let input = document.getElementById("usernameInputProfile").value
    localStorage.setItem("sgs_profile_username", input)
}

var playing = false;
function trackGameData(id, status){
    removed_games.forEach(game => {
        var playedGames = localStorage.getItem("playedGames") || null
        if(playedGames && playedGames.includes(game)) localStorage.setItem("playedGames", playedGames.replace(`${game} || `, ""))
    })
    if(status === "stop"){
        playing = false
    } else {
        playing = true
        notafklol();
        var playedGames = localStorage.getItem("playedGames") || null
        if(!playedGames){
            playedGames = `${id} || `
            localStorage.setItem("playedGames", playedGames)
            sendSiteData();
            return;
        }
        if(!playedGames.includes(`${id} ||`)){
            playedGames = playedGames + `${id} || `
            localStorage.setItem("playedGames", playedGames)
            sendSiteData();
        }
        checkCompletion();
    }
}

// var lastInput = Date.now() + 300000
var lastInput = Date.now()
function notafklol(){
    lastInput = Date.now();
    if(document.getElementById("afk_message0")){
        document.getElementById("afk_message0").remove();
        document.getElementById("afk_message1").remove();
    }
    if(document.getElementById("afk_message2")){
        document.getElementById("afk_message1").remove();
        document.getElementById("afk_message2").remove();
    }
    if(document.getElementById("afkdetector").style.display === "block") focusGame();
    document.getElementById("afkdetector").style.display = "none"
    document.getElementById("fullscreenGame").style.opacity = 1
}
if(window.location.pathname.includes("games.html")){
    document.getElementById("afkdetector").onmousewheel = function(){ notafklol() }
    document.getElementById("afkdetector").onmousemove = function(){ notafklol() }
    document.getElementById("afkdetector").onclick = function(){ notafklol() }
    document.onkeydown = function(){ notafklol() }
}
// document.getElementById("fullscreenGame").onmousemove = function(){ console.log("l")}
var xpMinute = 1
setInterval(() => {
    if(playing === false) return checkCompletion();
    if(lastInput + 1620000 < Date.now() || !document.getElementById("afkdetector") && window.location.pathname.includes("games.html")){
        exitWindowed();
        exitFullscreen();
        setTimeout(() => {
            if(!document.getElementById("afk_message1") && lastInput + 1020000 < Date.now()){
                createAlertBox({ color: "red", text: `Your about to go afk`, time: "never", id:"afk_message0" })
                createAlertBox({ color: "red", text: `Interact with the site`, time: "never", id:"afk_message1" })
            }
            document.getElementById("afkdetector").style.display = "block"
            document.activeElement.blur()
        }, 3000)
    }
    if(lastInput + 1800000 < Date.now() || !document.getElementById("afkdetector") && window.location.pathname.includes("games.html")){
        exitWindowed();
        exitFullscreen();
        setTimeout(() => {
            if(!document.getElementById("afk_message2") && lastInput + 1200000 < Date.now()){
                document.getElementById("afk_message0").remove();
                document.getElementById("afk_message1").remove();
                createAlertBox({ color: "red", text: `You've gone afk 💻`, time: "never", id:"afk_message2" })
                createAlertBox({ color: "red", text: `Interact with the site`, time: "never", id:"afk_message1" })
            }
            document.getElementById("afkdetector").style.display = "block"
            document.getElementById("fullscreenGame").style.opacity = 0.5
            document.activeElement.blur()
            return; //no xp for you ;)
        }, 3000)
    }
    var minutes_played = localStorage.getItem("minutes_played") || 0
    localStorage.setItem("minutes_played", parseInt(minutes_played) + 1)
    if(xpMinute === 2){
        var xp = parseInt(localStorage.getItem("xp")) || 0
        var lvl = parseInt(localStorage.getItem("lvl")) || 1
        var newxp = Math.floor(Math.random() * (125 - 60) + 60)
        if(localStorage.getItem("alerts") === "Show All" || localStorage.getItem("alerts") === null) createAlertBox({ text: `Earned ${newxp}xp for playing`, time: 5000 })
        if(xp + newxp >= lvl * 75){
            var xp = xp + newxp - lvl * 75
            var lvl = lvl + 1
            if(localStorage.getItem("alerts") !== "None") createAlertBox({ color: "green", text: `You leveled up to level ${lvl}`, time: 8000 })
            localStorage.setItem("xp", xp)
            localStorage.setItem("lvl", lvl)
        } else {
            var xp = xp + newxp
            localStorage.setItem("xp", xp)
        }
        xpMinute = 1
    } else {
        xpMinute = 2
    }
    sendSiteData();
    checkCompletion();
}, 60000)

function checkXP(){
    var xp = parseInt(localStorage.getItem("xp")) || 0
    var lvl = parseInt(localStorage.getItem("lvl")) || 1
    if(xp >= lvl * 75){
        var xp = xp - lvl * 75
        var lvl = lvl + 1
        if(localStorage.getItem("alerts") !== "None") createAlertBox({ color: "green", text: `You leveled up to level ${lvl}`, time: 8000 })
        localStorage.setItem("xp", xp)
        localStorage.setItem("lvl", lvl)
        checkXP();
    }
}

checkCompletion();
function checkCompletion(){
    checkXP();
    var minutes_played = localStorage.getItem("minutes_played") || 0
    var lvl = parseInt(localStorage.getItem("lvl")) || 1
    var games_played = localStorage.getItem("playedGames") || null
    if(games_played) games_played = games_played.split("||").length - 1
    var blogs_viewed = localStorage.getItem("viewedBlogs") || null
    if(blogs_viewed) blogs_viewed = blogs_viewed.split("||").length - 1
    completed = []
    for(let u = 0; u < achievement_data.length; u++){
        if(achievement_data[u].progress_info.a === "minutes_played"){
            if(minutes_played >= achievement_data[u].progress_info.b && localStorage.getItem(achievement_data[u].id) !== "true") completed.push(achievement_data[u].id)
        }
        if(achievement_data[u].progress_info.a === "reach_level"){
            if(lvl >= achievement_data[u].progress_info.b && localStorage.getItem(achievement_data[u].id) !== "true") completed.push(achievement_data[u].id)
        }
        if(achievement_data[u].progress_info.a === "play_games"){
            if(games_played >= achievement_data[u].progress_info.b && localStorage.getItem(achievement_data[u].id) !== "true") completed.push(achievement_data[u].id)
            if(games_played < achievement_data[u].progress_info.b && localStorage.getItem(achievement_data[u].id) === "true"){
                localStorage.setItem(achievement_data[u].id, "false")
                var replace = localStorage.getItem("badges").replace(`${achievement_data[u].progress_info.b_id} || `, "")
                localStorage.setItem("badges", replace)
            }
        }
        if(achievement_data[u].progress_info.a === "read_blogs"){
            if(blogs_viewed >= achievement_data[u].progress_info.b && localStorage.getItem(achievement_data[u].id) !== "true") completed.push(achievement_data[u].id)
        }
    }

    if(completed.length === 0) return;
    for(let i = 0; i < completed.length; i++){
        for(let o = 0; o < achievement_data.length; o++){
            if(achievement_data[o].id === completed[i]){
                localStorage.setItem(achievement_data[o].id, "true")
                createAlertBox({ color: "green", text: `Achievement completed`, time: 8000 })

                if(achievement_data[o].progress_info.xp){
                    if((achievement_data[o].id === "play_every_game" && localStorage.getItem("everyGame") !== "true") || achievement_data[o].id !== "play_every_game"){
                        localStorage.setItem("everyGame", "true")
                        var xp = parseInt(localStorage.getItem("xp")) || 0
                        var lvl = parseInt(localStorage.getItem("lvl")) || 1
                        var newxp = achievement_data[o].progress_info.xp
                        createAlertBox({ text: `Reward: ${newxp}xp`, time: 8000 })
                        if(xp + newxp >= lvl * 75){
                            var xp = xp + newxp - lvl * 75
                            var lvl = lvl + 1
                            if(localStorage.getItem("alerts") !== "None") createAlertBox({ color: "green", text: `You leveled up to level ${lvl}`, time: 8000 })
                            localStorage.setItem("xp", xp)
                            localStorage.setItem("lvl", lvl)
                        } else {
                            var xp = xp + newxp
                            localStorage.setItem("xp", xp)
                        }
                    }
                }

                if(achievement_data[o].progress_info.title){
                    var titles = localStorage.getItem("titles") || ""
                    titles = titles + `${achievement_data[o].progress_info.t_id} || `
                    localStorage.setItem("titles", titles)
                    createAlertBox({ text: `Reward: \"${achievement_data[o].progress_info.title}\" Title`, time: 8000 })
                }

                if(achievement_data[o].progress_info.b_id){
                    var badges = localStorage.getItem("badges") || ""
                    badges = badges + `${achievement_data[o].progress_info.b_id} || `
                    localStorage.setItem("badges", badges)
                    createAlertBox({ text: `Reward: New Badge!`, time: 8000 })
                }
                loadProfile();
            }
        }
    };
    sendSiteData();
}

loadAchievements();
function loadAchievements(){
    var count = 0
    var containers = []
    // var favorities = []

    achievement_data.forEach(achievement => {
        if(achievement.progress_info.a === "minutes_played"){
            var minutes_played = parseInt(localStorage.getItem("minutes_played")) || 0
            achievement.progress = (minutes_played / achievement.progress_info.b * 1000) / 10
            if(achievement.progress > 100) achievement.progress = 100
        }

        if(achievement.progress_info.a === "reach_level"){
            var lvl = parseInt(localStorage.getItem("lvl")) || 1
            achievement.progress = lvl / achievement.progress_info.b * 100
            if(achievement.progress > 100) achievement.progress = 100
        }

        if(achievement.progress_info.a === "play_games"){
            var games_played = localStorage.getItem("playedGames") || null
            if(!games_played){
                achievement.progress = 0
            } else {
                achievement.progress = (games_played.split("||").length - 1) / achievement.progress_info.b * 100
                if(achievement.progress > 100) achievement.progress = 100
            }
        }

        if(achievement.progress_info.a === "read_blogs"){
            var blogs_viewed = localStorage.getItem("viewedBlogs") || null
            if(!blogs_viewed){
                achievement.progress = 0
            } else {
                achievement.progress = (blogs_viewed.split("||").length - 1) / achievement.progress_info.b * 100
                if(achievement.progress > 100) achievement.progress = 100
            }
        }

        var div = document.createElement("div");
        div.className = "profileBox achievement"
        div.id = achievement.id
        if(achievement.progress === 100) div.style.opacity = "0.8"

        var name = document.createElement("span")
        name.className = "profileUsername"
        name.innerText = achievement.name
        name.id = Math.trunc(achievement.progress)
        div.appendChild(name)

        var br = document.createElement("br")
        div.appendChild(br)

        var text = document.createElement("span")
        text.className = "profileText"
        if(achievement.reward.includes("<img")) text.className = "profileText2"
        text.innerHTML = `<b>Reward:</b> ${achievement.reward}`
        div.appendChild(text)

        var statText = document.createElement("span")
        statText.className = "achievementStatsText"
        statText.innerHTML = `${Math.trunc(achievement.progress * achievement.progress_info.b / 100)}/${achievement.progress_info.b}`
        div.appendChild(statText)

        var achieveCircle = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        achieveCircle.setAttributeNS(null, "viewBox", "0 0 36 36")
        achieveCircle.setAttributeNS(null, "class", "circle-svg achieveCircle")
        if(achievement.reward.includes("<img")) achieveCircle.setAttributeNS(null, "class", "circle-svg achieveCircle2")

        if(window.location.pathname.includes("profile.html")){var around = document.querySelector("#lol").cloneNode(true)} else {var around = document.createElement("path")}
        // around.classList = "around"
        around.setAttribute("id", achievement.id + "_around")
        // around.setAttribute("stroke-dasharray", "100, 100")
        // around.setAttribute("b", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831")
        achieveCircle.appendChild(around)

        if(window.location.pathname.includes("profile.html")){var percent = document.querySelector("#lol").cloneNode(true)} else {var percent = document.createElement("path")}
        percent.classList = "percent"
        percent.setAttribute("id", achievement.id + "_percent")
        percent.setAttribute("stroke-dasharray", `${Math.trunc(achievement.progress)}, 100`)
        percent.setAttribute("b", "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831")
        achieveCircle.appendChild(percent)

        div.appendChild(achieveCircle)

        containers.push(div)

    })

    var completed = []
    var notCompleted = []
    containers.forEach(container => {
        if(container.getElementsByClassName("profileUsername")[0].id !== "100"){
            notCompleted.push(container)
        } else {
            completed.push(container)
        }
    })
    // containers.sort(function (a, b){ if(a.nameSort < b.nameSort){return -1} if(a.nameSort > b.nameSort){return 1} return 0})
    notCompleted.sort(function (a, b){return a.getElementsByClassName("profileUsername")[0].id-b.getElementsByClassName("profileUsername")[0].id})

    if(window.location.pathname.includes("profile.html")){
        completed.forEach(container => {
            referenceNode = document.getElementById("completedINsetLOLOL")
            referenceNode.parentNode.insertBefore(container, referenceNode.nextSibling)
            // document.getElementById("gamebar").appendChild(container)
        })
        notCompleted.forEach(container => {
            referenceNode = document.getElementById("insertBeforeThisLOL")
            referenceNode.parentNode.insertBefore(container, referenceNode.nextSibling)
            // document.getElementById("gamebar").appendChild(container)
        })
    }

    localStorage.setItem("achievementCompletedCount", completed.length)
    var achievementsCompleted = parseInt(localStorage.getItem("achievementCompletedCount")) || 0
    if(window.location.pathname.includes("profile.html")) document.getElementById("achievements_completed_text").innerText = `${achievementsCompleted}/${achievement_data.length}`
    if(window.location.pathname.includes("profile.html")) document.getElementById("achievements_completed").setAttribute("stroke-dasharray", Math.trunc(achievementsCompleted / achievement_data.length * 100) + ", 100")
}


loadPlayedGames();
function loadPlayedGames(){
    if(!window.location.pathname.endsWith("profile.html")) return;
    if(!localStorage.getItem("playedGames")){
        data.forEach(game => {
            var div = document.createElement("div");
            div.className = "gameBox"
            div.innerText = game.name
            div.onclick = function(){ location.replace(`games.html#${game.id}`)}
            document.getElementById("notplayedContainer").appendChild(div)
        })
        return;
    }
    var games_played = localStorage.getItem("playedGames").split(" || ") || null

    var matching = data.filter(game => games_played.includes(game.id))
    var not_matching = data.filter(game => !games_played.includes(game.id))

    matching.forEach(game => {
        var div = document.createElement("div");
        div.className = "gameBox"
        div.innerText = game.name
        div.style.opacity = 0.7
        div.onclick = function(){ location.replace(`games.html#${game.id}`)}
        document.getElementById("playedContainer").appendChild(div)
    })

    not_matching.forEach(game => {
        var div = document.createElement("div");
        div.className = "gameBox"
        div.innerText = game.name
        div.onclick = function(){ location.replace(`games.html#${game.id}`)}
        document.getElementById("notplayedContainer").appendChild(div)
    })
    console.log(matching)
}