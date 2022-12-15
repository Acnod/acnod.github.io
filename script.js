let open = Boolean(false);
let navigationBar = document.getElementById('navigation-bar');
let navButton = document.getElementById('nav-button');

function activeNav(){
    if (open == Boolean(false)) {
        navigationBar.classList.add("open")
        alert(open)
    } else {
        open = !open
    }
}
