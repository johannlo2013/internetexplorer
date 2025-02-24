// When the page loads, simulate browsing the web in 1999
window.onload = function() {
    const iframeContainer = document.getElementById("content");

    // URL and simulating loading a page
    const url = "http://www.example.com";  // Replace with your desired 1999-era URL

    // Update the address bar and status bar
    document.getElementById("url").value = url;

    const statusBar = document.querySelector('.ie-status-bar span');
    statusBar.textContent = 'Loading...';

    // Simulate a loading process (could be a simple setTimeout to mimic the old loading bar)
    setTimeout(function() {
        // Simulate a page loading and show content
        iframeContainer.innerHTML = `<h1>Welcome to ${url}</h1><p>This is a 1999-style web page simulation!</p>`;
        
        // Update status bar to "Ready"
        statusBar.textContent = 'Ready';
    }, 3000);  // Simulated load time (3 seconds)
};
