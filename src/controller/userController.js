import { 
    signUpServices,
    loginServices,
    getAllUserServices,
    getOneUserService,
} from "../services/userServices.js"

const signUp = (req,res) => {

}
const login = (req,res) => {

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
