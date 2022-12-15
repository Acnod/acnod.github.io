let navigationBar = document.getElementById("navigation-bar");

function activeNav(){
    if (!navigationBar.classList.contains("open")) {
        navigationBar.classList.add("open")
    } else {
        navigationBar.classList.remove("open")
    }
}
