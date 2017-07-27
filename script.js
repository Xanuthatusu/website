var home = () => console.log('home')
var about = () => console.log('about')

var navigateTo = url => router.setRoute(url)

var routes = {
    '/': home,
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
