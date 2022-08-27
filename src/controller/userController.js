import { 
    signUpServices,
    loginServices,
    getAllUserServices,
    getOneUserService,
} from "../services/userServices.js"

const signUp = (req,res) => {
    //mandamos el json con los datos del usuario
    res.json({
        message: signUpServices(req.body)
    })

}
const login = (req,res) => {
    res.send(req.body)

}
const getAllUser = (req,res) =>{
    res.send(getAllUserServices())
}
const getOneUser = (req,res) =>{

}

export {
    signUp,
    login,
    getAllUser,
    getOneUser,
}
