import {crudController} from "./crudController.js"
export class ProductController extends crudController{
    constructor(title,model){
        super(title,model)
    }
}
