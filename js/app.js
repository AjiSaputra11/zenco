let loadImg;
function loadBrand() {
    loadImg = setTimeout(showPage, 1000);
}
function showPage() {
    document.querySelector('.loader-img').style.display = 'none';
    document.querySelector('#full-page').style.display = 'block';
}