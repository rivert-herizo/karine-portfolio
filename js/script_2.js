// Handle URL tab parameter
const params = new URLSearchParams(window.location.search);
const tabIndex = parseInt(params.get('tab'));

if (!isNaN(tabIndex) && service_nav[tabIndex]) {
    service_nav[tabIndex].click();
} else {
    service_nav[0].click(); // default to first tab
}