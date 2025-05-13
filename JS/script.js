const arrow = document.getElementById("scrollArrow");

window.addEventListener("scroll", () => {
    if (window.scrollY > 800) {
        arrow.style.display = "block";
    }
    else {
        arrow.style.display = "none";
    }
})

// ----------------------------------------------------------------

function filterPets(petTypes, btnID) {

    // ----------------------- To Change Button Color -----------------

    const buttons = document.querySelectorAll('.filter-buttons > button');

    for (let btn of buttons) {
        btn.classList.remove('activeButton');
    }

    document.getElementById(btnID).classList.add('activeButton');

    // ----------------------- To Filter Pets ---------------------

    const petCards = document.querySelectorAll('.pet-card');

    for (let card of petCards) {
        if (petTypes === 'all' || card.classList.contains(petTypes)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    }

    // ----------------------------------------------------------------



}

// ----------------------------------------------------------------
