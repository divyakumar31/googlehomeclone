const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
const darkmode = document.querySelector('#setting');
const settingClick = document.querySelector('.setting-div');
const buttonShow = document.querySelector('.buttonShow');
const darkmodeswitch = document.querySelector('.dark-mode-buttons');

if (prefersColorScheme.matches) {
    document.body.classList.toggle('dark-theme-colors');
    darkmode.querySelector('button:nth-child(1)').classList.toggle('active');
    darkmode.querySelector('button:nth-child(2)').classList.toggle('active');
}

darkmodeswitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-colors');
    darkmode.querySelector('button:nth-child(1)').classList.toggle('active');
    darkmode.querySelector('button:nth-child(2)').classList.toggle('active');
});

settingClick.addEventListener('click', () => {
    if (buttonShow.style.display === "none") {
        buttonShow.style.display = "block";
    } 
    else {
        buttonShow.style.display = "none";
    }
});