import ApiError from "../../helpers/ApiError.js";

class BookContoller {
    #model
    constructor(model){
        this.#model = model
    }
    getOne = async (req, res, next)=>{
        try {
            res.status(200).json({message:"OK"})
        } catch (error) {
            
        }
    }
}

export default BookContoller