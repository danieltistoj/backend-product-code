export class crudService{
    constructor(data,model){
        this._data = data
        this._model = model
        this._successful = false 
    }
    async createService(title){
        try {
            const newModel = new this._model(this._data)
            console.log(newModel)
            await newModel.save()
            return `${title} created successfully`
        } catch (error) {
            console.log(error)
            return `${title} not created`
        }
    }
    updateService(model){

    }
    deleteService(model){

    }
    getAllServices(id){

    }
    getOneService(id){
        
    }
    /*
    El primero se refiere al valor de busqueda
    el segudno al dato en si 
    */
    /*
    Esta funcion devuelve un booleado si 
    ecuentra un valor con el dato enviado
    */
    async validation(key,data,model){
        const existModel = await model.findOne({key:data})
        let successful= false
        if(existModel){
            successful = true
        }
        return successful
    }

    //retorna todos los registros de una coleccion 
    async getAllData(){
        const filter = {}
        const all = await this._model.find(filter)
        return all
    }
    async getOneData(data){
        const filter = data
        const oneData = await this._model.findOne(filter)
        return oneData
    }
}