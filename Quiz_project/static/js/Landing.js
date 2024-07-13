function toggleNav() {
    var mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = (mobileNav.style.display === 'flex') ? 'none' : 'flex';
    console.log("toggleNav executed");
}

function OpenLogin() {
    window.location.href = "/login/";
    console.log("OpenLogin executed");
}

function toggleDropdown() {
    var profileBtn = document.querySelector("#Nav-bar .profile-btn");
    var dropdownContent = document.getElementById("dropdown-content");

    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
        dropdownContent.style.display = "block";
        profileBtn.style.borderBottomLeftRadius = "0";
        profileBtn.style.borderBottomRightRadius = "0";
    } else {
        dropdownContent.style.display = "none";
        profileBtn.style.borderBottomLeftRadius = "15px";
        profileBtn.style.borderBottomRightRadius = "15px";
    }
    console.log("toggleDropdown executed");
    console.log("Bottom Left Radius:", getComputedStyle(profileBtn).borderBottomLeftRadius);
    console.log("Bottom Right Radius:", getComputedStyle(profileBtn).borderBottomRightRadius);
}

window.onclick = function(event) {
    if (!event.target.matches('.profile-btn')) {
        var dropdownContent = document.getElementById("dropdown-content");
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
    console.log("window.onclick executed");
};

window.addEventListener('resize', function () {
    var mobileNav = document.querySelector('.mobile-nav');
    if (window.innerWidth > 975) {
        mobileNav.style.display = 'none';
    }
    console.log("resize event executed");
});
function logoutUser() {
    window.location.href = "{% url 'logout' %}";
}