const generateId = ()=>{
    //combinacion random
    const random = Math.random().toString(32).substring(2)
    //fecha
    const date = Date.now().toString(32)
    return random + date
}