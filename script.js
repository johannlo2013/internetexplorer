// When the page loads, set the address bar URL and display the 1999 Wayback Machine iframe
window.onload = function() {
    const url = "http://www.aol.com";  // Replace with any 1999 URL
    const iframe = document.getElementById('web-frame');
    const addressBar = document.getElementById('url');

    // Set the address bar to the 1999-style URL
    addressBar.value = url;

    // Set the iframe to load the Wayback Machine snapshot for 1999
    iframe.src = "http://web.archive.org/web/19990101000000*/" + url;

    // Update the status bar to "Ready"
    const statusBar = document.querySelector('.ie-status-bar span');
    statusBar.textContent = 'Ready';
};
