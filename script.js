// Automatically load the Wayback Machine snapshot for a 1999 website when the page loads
window.onload = function() {
    const iframe = document.getElementById('web-frame');
    iframe.src = "http://web.archive.org/web/19990101000000*/http://www.example.com"; // Modify with your desired website

    // Change status bar text to "Loading..."
    const statusBar = document.querySelector('.ie-status-bar span');
    statusBar.textContent = 'Loading...';
    
    // Update the status bar once the iframe finishes loading
    iframe.onload = function() {
        statusBar.textContent = 'Ready';
    };
};
