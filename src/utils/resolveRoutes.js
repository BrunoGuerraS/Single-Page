const { default: router } = require("../routes");

const resolveRoutes = (route) => {
    if(router.length <= 3){
        let valiedRoute = route === '/' ? route : '/:id'
        return valiedRoute
    }
    return `/${route}`
}


export default resolveRoutes