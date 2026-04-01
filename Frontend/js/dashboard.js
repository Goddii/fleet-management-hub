
// retrieve the saved name from local storage
const loggedInDriver = localStorage.getItem('currentDriver')


// check if a name actually exists(to prevent errors if they bypass login)
if (loggedInDriver) {

    // inject name into the html
    document.getElementById('driver-display').textContent = loggedInDriver


} else {

    // if no one is logged in you could redirect them back to the login page
    window.location.href = 'login.html'
}