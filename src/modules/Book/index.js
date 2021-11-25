import router from "./router.js"
import BookContoller from "./controller.js"
import Book from "./model.js"


const controller =  new BookContoller(Book)
const BookRouter = router(controller)

export default BookRouter