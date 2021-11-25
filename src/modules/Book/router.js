import { Router } from "express";

export default (controller) =>{
    const router = Router()
    router.route('/getBook').get(controller.getOne)
    return router
}