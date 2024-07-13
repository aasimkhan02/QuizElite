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

    document.addEventListener('DOMContentLoaded', function () {
        var createQuizBtn = document.getElementById('createQuizBtn');
        var notCreateQuizBtn = document.getElementById('NotcreateQuizBtn');

        createQuizBtn.addEventListener('click', function() {
            // Redirect to the create quiz page if the user is logged in
            window.location.href = "{% url 'Create' %}";
        });

        notCreateQuizBtn.addEventListener('click', function() {
            // Show an alert if the user is not logged in
            alert("Please sign in to create a quiz.");
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var createQuizBtn = document.getElementById('createQuizBtn');
        var notCreateQuizBtn = document.getElementById('NotcreateQuizBtn');

        createQuizBtn.addEventListener('click', function() {
            // Redirect to the create quiz page if the user is logged in
            window.location.href = "{% url 'Create' %}";
        });

        notCreateQuizBtn.addEventListener('click', function() {
            // Show an alert if the user is not logged in
            alert("Please sign in to create a quiz.");
        });
    });


    document.addEventListener('DOMContentLoaded', function () {
        // Get the image elements by their respective IDs
        var flagImage = document.getElementById('FlagQuiz');
        var capitalImage = document.getElementById('CapitalQuiz');
        var landmarkImage = document.getElementById('LandmarkQuiz');
        var MountainImage = document.getElementById('MountainQuiz');
        var FigureImage = document.getElementById('FigureQuiz');
        var CivilizationImage = document.getElementById('CivilizationQuiz');
        var WarImage = document.getElementById('WarQuiz');
        var IndianHistoryImage = document.getElementById('IndianHistoryQuiz');
        var AstronomyImage = document.getElementById('AstronomyQuiz');
        var BiologyImage = document.getElementById('BiologyQuiz');
        var PhysicsImage = document.getElementById('PhysicsQuiz');
        var ElementImage = document.getElementById('ElementQuiz');
        var TechInnovationImage = document.getElementById('InnovationQuiz');
        var JargonImage = document.getElementById('JargonQuiz');
        var TechHistryImage = document.getElementById('TechHistryQuiz');
        var TechDevicesImage = document.getElementById('TechDevicesQuiz');
        var pythonImage = document.getElementById('PythonQuiz');
        var JavaImage = document.getElementById('JavaQuiz');
        var JavascriptImage = document.getElementById('JavascriptQuiz');
        var cppimage = document.getElementById('C++Quiz');
        var TypesImage = document.getElementById('TypesQuiz');
        var ConceptImage = document.getElementById('ConceptQuiz');
        var FeaturesImage = document.getElementById('FeaturesQuiz');
        var OSHistoryImage = document.getElementById('OSHistoryQuiz');
        var Create = document.getElementById('go_to_create');
        var SQLImage = document.getElementById('SQLQuiz');
        var DesignImage = document.getElementById('DesignQuiz');
        var RDBMSImage = document.getElementById('RDBMSQuiz');
        var NOSQLImage = document.getElementById('NOSQLQuiz');
        var micro1Image = document.getElementById('8086Quiz');
        var micro2Image = document.getElementById('80386Quiz');
        var micro3Image = document.getElementById('PentiumQuiz');
        var micro4Image = document.getElementById('ComparisionQuiz');
        var net1Image =  document.getElementById('OSIQuiz');
        var net2Image =  document.getElementById('DevicesQuiz');
        var net3Image =  document.getElementById('AddressingQuiz');
        var net4Image =  document.getElementById('SecurityQuiz');

        // Add click event listeners to the images
        flagImage.addEventListener('click', function () {
            // Redirect to the 'random_quiz.html' URL with key 1 when the flag image is clicked
            window.location.href = '/ImagebasedQuiz.html?key=1';
        });
    
        capitalImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=2';
        });
    
        landmarkImage.addEventListener('click', function () {
            window.location.href = '/ImagebasedQuiz.html?key=3';
        });

        MountainImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=4';
        });

        FigureImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=5';
        });

        CivilizationImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=6';
        });

        WarImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=7';
        });

        IndianHistoryImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=8';
        });

        AstronomyImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=9';
        });

        BiologyImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=10';
        });

        PhysicsImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=11';
        });

        ElementImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=12';
        });

        TechInnovationImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=13';
        });

        JargonImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=14';
        });

        TechHistryImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=15';
        });

        TechDevicesImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=16';
        });

        pythonImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=17';
        });

        JavaImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=18';
        });

        JavascriptImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=19';
        });

        cppimage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=20';
        });

        TypesImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=21';
        });

        ConceptImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=22';
        });

        FeaturesImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=23';
        });

        OSHistoryImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=24';
        });

        SQLImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=25';
        });

        DesignImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=26';
        });

        RDBMSImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=27';
        });

        NOSQLImage.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=28';
        });

        micro1Image.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=29';
        });

        micro2Image.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=30';
        });

        micro3Image.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=31';
        });

        micro4Image.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=32';
        });

        net1Image.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=33';
        });

        net2Image.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=34';
        });

        net3Image.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=35';
        });

        net4Image.addEventListener('click', function () {
            window.location.href = '/TextbasedQuiz.html?key=36';
        });
    });
    