export class crudService{
    constructor(model){
        this._model = model
        this._successful = false 
    }
    async createService(title,data){
        try {
            const newModel = new this._model(data)
            console.log(newModel)
            await newModel.save()
            return `${title} created successfully`
        } catch (error) {
            console.log(error)
            return `${title} not created`
        }
    }
    /*
    Modificar modelo 
    */
    async updateService(filter,upData){
        const newData = await this._model.updateOne(filter,upData)
        return newData
    }

    async deleteService(filter){
        return await this._model.deleteOne(filter)
    }
    /*
    El primero se refiere al valor de busqueda
    el segudno al dato en si 
    */
    /*
    Esta funcion devuelve un booleado si 
    ecuentra un valor con el dato enviado
    */
    async validation(filter){
        const existModel = await this._model.findOne(filter)
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
    async getOneData(filter){
        const oneData = await this._model.findOne(filter)
        return oneData
    }
}