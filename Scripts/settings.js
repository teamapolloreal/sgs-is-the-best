setNav()
function setNav(){
    let nav = localStorage.getItem("nav")
    if(!nav) nav = "Sidebar"

    if(nav === "Sidebar"){
        document.getElementById("navbar1").style.display = "block"
        document.getElementById("navbar2").style.display = "none"
        sidebar.classList = "sidebar close"
        if(localStorage.getItem("openSidebar") === "true") sidebar.classList.toggle("close")
        var homeBox = document.getElementsByClassName("homeBox")
        if(homeBox.length !== 0){
            for(let i = 0; i < homeBox.length; i++){ homeBox[i].classList = "homeBox homeBox1"}
            document.getElementById("homeSection0").style.height = "100vh"
            document.getElementById("homeTextBox").style.top = "38vh"
        }

        var sections = document.getElementsByClassName("sectionNav2")
        for(let i = 0; i < sections.length; i++){
            sections[i].setAttribute("class", "section")
        }
    }
    if(nav === "Horizontal Bar"){
        document.getElementById("navbar1").style.display = "none"
        document.getElementById("navbar2").style.display = "block"
        sidebar.classList = "sidebar"

        var sections = document.getElementsByClassName("section")
        for(let i = 0; i < sections.length; i++){
            sections[i].setAttribute("class", "section sectionNav2")
        }
    }
}

var ddl = document.getElementById("navSelect");
if(ddl !== null){
    var opts = ddl.options.length
    for(var i = 0; i < opts; i++){
        if(ddl.options[i].value == localStorage.getItem("nav")){
            ddl.options[i].selected = true;
            break;
        }
    }
}

instanlyLaunchGame();

function instanlyLaunchGame(changed){
    if(changed === true){
        if(localStorage.getItem("instantGame") === "false"){
            localStorage.setItem("instantGame", true)
            document.getElementById("instantGameSwitch").style.left = "30px";
            document.getElementById("instantGameSwitch").style.backgroundColor = "#fff"
            document.getElementById("instantGameBack").style.backgroundColor = "var(--primary-color)";
        } else {
            document.getElementById("instantGameSwitch").style.left = "15px";
            document.getElementById("instantGameSwitch").style.backgroundColor = "var(--body-color)"
            document.getElementById("instantGameBack").style.backgroundColor = "var(--toggle-color)";
            localStorage.setItem("instantGame", false)
        }
    } else {
        if(localStorage.getItem("instantGame") === "true"){
            if(document.getElementById("instantGameSwitch") !== null){
                document.getElementById("instantGameSwitch").style.left = "30px";
                document.getElementById("instantGameSwitch").style.backgroundColor = "#fff"
                document.getElementById("instantGameBack").style.backgroundColor = "var(--primary-color)";
            }
        } else {
        }
    }
}

gameIconSetting();

function gameIconSetting(changed){
    if(changed === true){
        if(localStorage.getItem("gameIcon") === null || localStorage.getItem("gameIcon") === "true"){
            localStorage.setItem("gameIcon", false)
            document.getElementById("gameIconSwitch").style.left = "15px";
            document.getElementById("gameIconSwitch").style.backgroundColor = "var(--body-color)"
            document.getElementById("gameIconBack").style.backgroundColor = "var(--toggle-color)";
        } else {
            document.getElementById("gameIconSwitch").style.left = "30px";
            document.getElementById("gameIconSwitch").style.backgroundColor = "#fff"
            document.getElementById("gameIconBack").style.backgroundColor = "var(--primary-color)";
            localStorage.setItem("gameIcon", true)
        }
    } else
    {
        if(localStorage.getItem("gameIcon") === null || localStorage.getItem("gameIcon") === "true"){
            if(document.getElementById("gameIconSwitch") !== null){
                document.getElementById("gameIconSwitch").style.left = "30px";
                document.getElementById("gameIconSwitch").style.backgroundColor = "#fff"
                document.getElementById("gameIconBack").style.backgroundColor = "var(--primary-color)";
            }
        } else {
        }
    }
}

openSidebarSetting();

function openSidebarSetting(changed){
    if(changed === true){
        if(localStorage.getItem("openSidebar") === "false"){
            localStorage.setItem("openSidebar", true)
            document.getElementById("openSidebarSwitch").style.left = "30px";
            document.getElementById("openSidebarSwitch").style.backgroundColor = "#fff"
            document.getElementById("openSidebarBack").style.backgroundColor = "var(--primary-color)";
        } else {
            document.getElementById("openSidebarSwitch").style.left = "15px";
            document.getElementById("openSidebarSwitch").style.backgroundColor = "var(--body-color)"
            document.getElementById("openSidebarBack").style.backgroundColor = "var(--toggle-color)";
            localStorage.setItem("openSidebar", false)
        }
    } else {
        if(localStorage.getItem("openSidebar") === "true"){
            if(document.getElementById("openSidebarSwitch") !== null){
                document.getElementById("openSidebarSwitch").style.left = "30px";
                document.getElementById("openSidebarSwitch").style.backgroundColor = "#fff"
                document.getElementById("openSidebarBack").style.backgroundColor = "var(--primary-color)";
            }
        } else {
        }
    }
}

setCloak()

function setCloak() {
    let icon = localStorage.getItem("tabCloak")
    if(!icon) icon = "Default"
    var link = document.querySelector("link[rel~='icon']");
    if(!link){
        link = window.document.createElement("link");
        link.rel = "icon"
        link.herf = "test"
        link.type = "image/x-icon"
        window.document.getElementsByTagName("head")[0].appendChild(link);
    }

    // var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
    // link.type = "image/x-icon";
    // link.rel = "shortcut icon";
    // link.herf = "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";
    // document.getElementsByTagName('head')[0].appendChild(link);
    // return;

    if(icon === "Default"){
        link.herf = "sgs-logo.png";
        document.title = "Syce's Game Shack"
    }

    if(icon === "Google Slides"){
        link.herf = "https://ssl.gstatic.com/docs/presentations/images/favicon5.ico";
        document.title = "Google Slides"
    }

    if(icon === "Google Docs"){
        link.herf = "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico";
        document.title = "Google Docs"
    }

    if(icon === "Google Drive"){
        link.setAttribute("herf", "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png")
        document.title = "Google Drive"
    }

    if(icon === "Schoology"){
        link.herf = "https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico";
        document.title = "Home | Schoology"
    }

    if(icon === "Desmos"){
        link.herf = "https://www.desmos.com/assets/img/touch-icon-192x192.png";
        document.title = "Desmos | Scientific Calculator"
    }
}

if(localStorage.getItem("tabCloak") === null){ localStorage.setItem("tabCloak", "Default"); }
var ddl = document.getElementById("cloakSelect");
if(ddl !== null){
    var opts = ddl.options.length
    for(var i = 0; i < opts; i++){
        if(ddl.options[i].value == localStorage.getItem("tabCloak")){
            ddl.options[i].selected = true;
            break;
        }
    }
}

function setMode(){
    let mode = localStorage.getItem("mode")
    if(!mode) mode = "Dark"

    if(mode === "Dark"){
        localStorage.setItem("mode", "Dark");
        if(body.classList[0] !== "dark") body.classList.toggle("dark");
        document.body.style.setProperty("--primary-color", "#3a3b3c");
        document.body.style.setProperty("--primary-text-color", "#ccc")
    }
    if(mode === "Dark Themed"){
        localStorage.setItem("mode", "Dark Themed");
        if(body.classList[0] !== "dark") body.classList.toggle("dark");
        loadTheme()
    }
    if(mode === "Light"){
        localStorage.setItem("mode", "Light");
        if(body.classList[0] === "dark") body.classList.toggle("dark");
        loadTheme();
    }
}

var ddl = document.getElementById("modeSelect");
if(ddl !== null){
    var opts = ddl.options.length
    for(var i = 0; i < opts; i++){
        if(ddl.options[i].value == localStorage.getItem("mode")){
            ddl.options[i].selected = true;
            break;
        }
    }
}

loadTheme();
function loadTheme(){
    let theme = localStorage.getItem("themeHex")
    if(!theme) theme = "#695CFE"
    if(localStorage.getItem("mode") === "Dark Themed"){
        document.body.style.setProperty("--primary-color", theme)
        document.body.style.setProperty("--primary-text-color", "#fff")
    }
    if(localStorage.getItem("mode") === "Light"){
        document.body.style.setProperty("--primary-color", theme)
    }
}

function setTheme(){
    let theme = localStorage.getItem("theme")
    if(theme === "Purple (Default)"){
        localStorage.setItem("themeHex", "#695CFE")
        loadTheme();
    }
    if(theme === "Green"){
        localStorage.setItem("themeHex", "#0ed929")
        loadTheme();
    }
    if(theme === "Light Blue"){
        localStorage.setItem("themeHex", "#16aee6")
        loadTheme();
    }
    if(theme === "Orange"){
        localStorage.setItem("themeHex", "#f6920e")
        loadTheme();
    }
    if(theme === "Red"){
        localStorage.setItem("themeHex", "#f6290e")
        loadTheme();
    }
    if(theme === "Yellow"){
        localStorage.setItem("themeHex", "#febb01")
        loadTheme();
    }
    if(theme === "Custom"){
        localStorage.setItem("themeHex", document.getElementById("theme_color_picker").value)
        document.getElementById("theme_color_picker").style.display = "block"
        loadTheme();
    }
}

var ddl = document.getElementById("themeSelect");
var colorPicker = document.getElementById("theme_color_picker")
if(ddl !== null){
    var opts = ddl.options.length
    for(var i = 0; i < opts; i++){
        if(ddl.options[i].value == localStorage.getItem("theme")){
            ddl.options[i].selected = true;
            if(localStorage.getItem("theme") === "Custom"){
                colorPicker.style.display = "block"
                colorPicker.value = localStorage.getItem("themeHex")
            }
            break;
        }
    }
}

//Onload
{
    var cloakSelect = document.getElementById("cloakSelect")
    if(cloakSelect){
        cloakSelect.addEventListener("change", function(event){
            if(localStorage.getItem("tabCloak") === null){
                localStorage.setItem("tabCloak", "Default");
            }
            localStorage.setItem("tabCloak", event.target.value);
            setCloak();
            // saveSiteData();
        })
    }

    var modeSelect = document.getElementById("modeSelect")
    if(modeSelect){
        modeSelect.addEventListener("change", function(event){
            if(localStorage.getItem("mode") === null){
                localStorage.setItem("mode", "Dark");
            }
            localStorage.setItem("mode", event.target.value);
            setMode();
            // saveSiteData();
        })
    }

    var themeSelect = document.getElementById("themeSelect")
    if(themeSelect){
        themeSelect.addEventListener("change", function(event){
            if(localStorage.getItem("theme") === null){
                localStorage.setItem("theme", "Purple (Default)");
            }
            localStorage.setItem("theme", event.target.value);
            document.getElementById("theme_color_picker").style.display = "none"
            setTheme();
            // saveSiteData();
        })
    }

    var navSelect = document.getElementById("navSelect")
    if(navSelect){
        navSelect.addEventListener("change", function(event){
            if(localStorage.getItem("nav") === null){
                localStorage.setItem("nav", "Sidebar");
            }
            localStorage.setItem("nav", event.target.value);
            setNav();
            // saveSiteData();
        })
    }
}
