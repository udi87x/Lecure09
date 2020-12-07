var movies = [{
    title: "Ant-Man and the Wasp",
    poster: "images/ant.png",
    releaseYear: 2018
}, {
    title: "Incredibles 2",
    poster: "images/inc.png",
    releaseYear: 2018
}, {
    title: "Leave No Trace",
    poster: "images/leave.png",
    releaseYear: 2018
}, {
    title: "Ocean's 8",
    poster: "images/ocean.png",
    releaseYear: 2018
}, {
    title: "Tag",
    poster: "images/tag.png",
    releaseYear: 2018
}]




var index = 0;

$('#next').on('click', () => {
    index++;
    if (index >= movies.length) {
        index = 0;
    }
    changeGalleryItem(index);
});

$('#back').on('click', () => {
    index--;
    if (index < 0) {
        index = movies.length - 1;
    }

    changeGalleryItem(index);
});




function changeGalleryItem(index) {
    $('#gallery-item').html(`
    <img src="${movies[index].poster}">
    <h2>${movies[index].title}</h2>
    <p>Release Year: ${movies[index].releaseYear}</p>`)
}


setInterval(() => {
    $('#next').trigger('click');
}, 3000);