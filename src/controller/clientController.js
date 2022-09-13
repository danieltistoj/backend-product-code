import {crudController} from "./crudController.js"
export class ClientController extends crudController{
    constructor(title,model){
        super(title,model)
    }
}
