
import User from '../models/User.js'
import generateId from '../helpers/generateId.js'
import generateJWT from '../helpers/generateJWT.js'

const signUpServices = async (user) => {

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

const loginServices = async (user) => {
    console.log(user)
    const email = user.email
    const existsUser = await User.findOne({email})
    console.log(existsUser)
    let successful = false
    //Si el usuario existe
    if(!existsUser){
        return "Username does not exist"
    }
    //comprobar confirmacion
    if(!existsUser.confirmed){
        return "Your account is not confirmed"
    }
    //comprobar password
    
    if(await existsUser.comparePassword(user.password)){
        return {
            auth: true,
            email: existsUser.email,
            token: generateJWT(existsUser.token)
        }
    }else {
        return "Incorrect password"
    }
}
export class UserService{
    constructor(model){
        this.model = model
    }

    async signUpService(user){
        const email = user.email
        const existUser = await User.findOne({email})
        let successful = false
        if(!existUser){
            try{
                const newUser = new User(user)
                await newUser.save()
                successful = true
            }catch(err){
                console.log(err)
            }
        }
        return successful
    }

}