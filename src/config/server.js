class Server  {
    #http
    constructor(http){
        this.#http = http
    }
    middleWares (middleWares){
        for(let key in middleWares){
            this.#http.use(middleWares[key])
        }
    }
    routes(routes){
        for(let path in routes){
            this.#http.use(path, routes[path])
        }

    }
    errorHandler(errorHandler){
        this.#http.use(errorHandler)
    }
    start(port){
        this.#http.listen(port,()=> console.log(`server is running on ${port}`))
    }
}

export default Server