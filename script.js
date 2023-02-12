let navigationBar = document.getElementById("navigation-bar");

function activeNav(){
    if (navigationBar.classList.contains("open")) {
        navigationBar.classList.remove("open")

    } else {
        navigationBar.classList.add("open")
    }
}
