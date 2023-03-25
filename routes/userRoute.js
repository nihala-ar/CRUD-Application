const express = require("express");
const { signup, login, test,  addBook,  deleteBook, updateBook, books,  clientCreate, clientDeet, createMember, memberDisplay, createCustomer, customerDisplay, createOrder, orderDisplay, display } = require("./controller/userController");
const router = express.Router();


router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/test").get(test);

router.route("/books").get(books)
router.route("/addBook").post(addBook)
router.route("/display/:id").get(display)

// router.route("/deleteBook").delete(deleteBook)
router.route("/delete/:id").delete(deleteBook)

// router.route("/updateBook").put(updateBook)
router.route("/update/:id").put(updateBook)

router.route("/client").post(clientCreate)
router.route("/clientdetails").get(clientDeet)

router.route("/member").post(createMember)
router.route("/memberdetails").get(memberDisplay)

router.route("/customer").post(createCustomer)
router.route("/customerdetails").get(customerDisplay)

router.route("/order").post(createOrder)
router.route("/orderdetails").get(orderDisplay)





module.exports = router;
