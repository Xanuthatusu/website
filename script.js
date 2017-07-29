var lastPage = "home"

var switchPage = newPage => {
    document.getElementById(lastPage).className = "hidden"
    document.getElementById(newPage).className = "content showing"
    lastPage = newPage
}

var home = () => switchPage("home")
var about = () => switchPage("about")

var navigateTo = url => router.setRoute(url)

var routes = {
    '/': () => navigateTo('/home'),
    '/home': home,
    '/about': about
}

var router = Router(routes)

setTimeout(() => {
    // Make sure there's a hash in the url
    if (!window.location.hash) {
        var path = window.location.pathname.split('/')[1]
        window.location.replace('http://' + top.location.host + '#/' + path)
    }

    router.init();
}, 0)
