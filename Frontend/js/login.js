// grab the form from your html using its id
const loginForm = document.getElementById('login-form')


// listen for the user to click the submit button
loginForm.addEventListener('submit', function(event){
    //prevent the default html behaviour (which is reloading the page)
    event.preventDefault()


    // grab the value the user typed into the input field
    const driverName = document.getElementById('username').value

    // save it to the browser's local storage
    localStorage.setItem('currentDriver', driverName)

    // redirect the user to the driver dashboard
    console.log('Login successful! Redirecting....')
    window.location.href = 'driver_dashboard.html'
})