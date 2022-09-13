import { crudController } from "./crudController.js";
import generateJWT from '../helpers/generateJWT.js'
export class UserController extends crudController {
    constructor(title,model){
        super(title,model)
    }
    async signUp(data){
        const email = data.email
        //se envia como parametro el email
        if(!await this.validation({email})){
            return await this.create(data)
        }
        else{
            const error = new Error(`User ${data.email} already exists`)
            throw error
        }
    }

    async signIn(data){
        const {email, password} = data
        console.log(email)
        //validamos primero el email
        if(await this.validation({email})){
            //obtenemos los datos del usuario
            const user = await this.getOneData({email})
            console.log(user)
            //comprobamos que la contraseña sea correcta
            const validator =  await user.comparePassword(password)
            console.log(validator)
            if(validator){
                return {
                    auth: true,
                    email: user.email,
                    token: generateJWT(user._id)
                }
            }else{
                    throw new Error("Incorrect password")
            }
        }
        else{
            throw new Error(`The user ${data.email} does not exist`)
        
        }
    }

}