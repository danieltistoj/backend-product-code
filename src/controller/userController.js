import { 
    signUpServices,
    loginServices,
    getAllUserServices,
    getOneUserService,
} from "../services/userServices.js"

const signUp = async (req,res) => {
    //mandamos el json con los datos del usuario
    const  successful = await signUpServices(req.body)
    console.log(successful)
    if(successful){
        res.send({
            message:"user created successfully"
        })
    }else{
        res.send({
            message:`User ${req.body.email} already exists`
        })
    }

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
