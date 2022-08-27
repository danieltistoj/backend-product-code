import User from '../models/User.js'

const signUpServices = async (user) => {
    //buscamos el email para ver si existe
    /*
    console.log(user)
    const email = user.email
    const existsUser = await User.findOne({email})
    
    if(existsUser){
        const error = new Error(`User ${user.email} already exists`)
        console.log(error.message)
        return error.message
    }
    try {
        const newUser = new User(user)
        await newUser.save()
        return "successfully registered user"
    }catch(err){
        console.log(err)
    }
    
*/
    const email = user.email
    const existsUser = await User.findOne({email})
    let successful = false
    console.log(existsUser)
    //si el usuario no exise se ingresa el nuevo
    if(!existsUser){
        try {
            const newUser = new User(user)
            await newUser.save()
            successful = true
        }catch(err){
            console.log(err)
        }
        
    }
    return successful
}




const loginServices = (email,password) => {

}
const getAllUserServices = () =>{
    return "Todos los usuarios"
}
const getOneUserService = (id) =>{

}

export {
    signUpServices,
    loginServices,
    getAllUserServices,
    getOneUserService,
}
