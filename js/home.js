if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    const tourButton = document.querySelectorAll(".tour-btn");
    console.log(tourButton);
    tourButton.forEach((tourBtn) => {
        tourBtn.addEventListener('click', bookTourTicket)
    })

    const btnHeader = document.getElementsByClassName("btn-header")[0];
    console.log(btnHeader);
    btnHeader.addEventListener('click', goToLatestAlbum)
}

function goToLatestAlbum(event) {
    window.location.href = "./store.html";
}
function bookTourTicket(event) {
    const tourButton = event.target;
    const tourRow = tourButton.parentElement;
    console.log(tourRow)
    const childrenElements = tourRow.children;
    const tourDetails = [];
    // let tourDate,tourCity,tourArena;
    for (let i = 0; i < childrenElements.length - 1; i += 1) {
        tourDetails.push(childrenElements[i].textContent);
    }
    alert(`Your ticket for the ${tourDetails[0]} concert in ${tourDetails[1]}, at the ${tourDetails[2]} has been confirmed. Enjoy the show!`)
    tourRow.remove();
    console.log(tourDetails);
}
