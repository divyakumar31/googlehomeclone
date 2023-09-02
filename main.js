const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersColorScheme.matches) {
    document.body.classList.toggle('dark-theme-colors');
}