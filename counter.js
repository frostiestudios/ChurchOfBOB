function incrementViews() {
    // Get the current view count from storage or set to 0
    var views = parseInt(localStorage.getItem('views')) || 0;
    // Increment the view count
    views++;
    // Save the updated view count to storage
    localStorage.setItem('views', views);
    // Update the view count on the page
    document.getElementById('view-count').textContent = views;
}
