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
            const err = new Error(`${title} not created`)
            throw err
        }
    }
    /*
    Modificar modelo 
    */
    async updateService(filter,upData){
        try {
            const newData = await this._model.updateOne(filter,upData)
            return newData
        } catch (error) {
            return error
        }
    }

    async deleteService(filter){
        try {
            return await this._model.deleteOne(filter)
        } catch (error) {
            return error
        }
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
        try {
            const filter = {}
            const all = await this._model.find(filter)
            return all
        } catch (error) {
            throw error
        }
    }
    async getOneData(filter){
        try {
            const oneData = await this._model.findOne(filter)
            return oneData
        } catch (error) {
            return error
        }
    }
    async getOneDataIgnore(filter,ignore){
        try {
            const oneData = await this._model.findOne(filter,ignore)
            return oneData
        } catch (error) {
            return error
        }
    }
}