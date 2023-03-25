const user = require("../../schema/testSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const book = require("../../schema/userSchema");
const client = require("../../schema/clientSchema");
const member = require("../../schema/memberSchema");
const customer = require("../../schema/customerSchema");
const order = require("../../schema/orderSchema");

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userExist = await user.findOne({ email: email });

  if (userExist) {
    res.json({
      message: "Use another email",
      isError: true,
    });
  } else {
    const userDetails = await user.create({
      name,
      email,
      password: hashedPassword,
    });

    const generateToken = (id) => {
      return jwt.sign({ id }, "1234", { expiresIn: "1d" });
    };

    res.json({
      id: userDetails.id,
      email: userDetails.email,
      token: generateToken(userDetails.id),
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.json({
      message: "Please enter details",
      isError: true,
    });
  } else {
    const findUser = await user.findOne({ email: email });
    if (findUser && (await bcrypt.compare(password, findUser.password))) {
      const generateToken = (id) => {
        return jwt.sign({ id }, "1234", { expiresIn: "1d" });
      };

      res.json({
        login: "success",
        id: findUser.id,
        email: findUser.email,
        token: generateToken(findUser.id),
      });
    }
  }
};

const test = (req, res) => {
  res.json("backend running");
};

const addBook = async (req, res) => {
  const { name, author } = req.body;
  // ,date,summary,category,language,pages,isbn}

  const userExist = await book.findOne({ name: name });

  if (userExist) {
    res.json({
      message: "Book already added to library",
      ifError: true,
    });
  } else {
    const userDetails = await book.create({
      name,
      author,
    });

    res.json({
      id: userDetails.id,
      name: userDetails.name,
      author: userDetails.author,
    });
  }
};

const deleteBook = async (req, res) => {
  

  const _id = req.params.id;
  const delUser = await book.findByIdAndDelete(_id);
};

const updateBook = async (req, res) => {
  const { name, author } = req.body;

  const _id = req.params.id;

  const up = await book.findByIdAndUpdate(_id, {
    name,
    author,
  });
  res.json(up);
};

const books = async (req, res) => {
  const allBooks = await book.find();
  res.json(allBooks);
};

const display = async(req,res)=>{
const _id = req.params.id;
const disp = await book.findById(_id)
res.json(disp)
}

const clientCreate = async (req, res) => {
  const { username, role, email, status, info } = req.body;

  const userExist = await client.findOne({ username: username });

  if (userExist) {
    res.json({
      message: "Username already exists",
      ifError: true,
    });
  } else {
    const userDetails = await client.create({
      username,
      role,
      email,
      status,
      info,
    });

    res.json({
      id: userDetails.id,
      username: userDetails.username,
      email: userDetails.email,
    });
  }
};

const clientDeet = async (req, res) => {
  const allClients = await client.find();
  res.json(allClients);
};

const createMember = async (req, res) => {
  const { name, address, number, descptn, number2, position } = req.body;

  const memberExist = await member.findOne({number:number});

  if (memberExist) {
    res.json({
      message: "Number already exists",
      ifError: true,
    })
  }else{
    const memberDetails = await member.create({
      name,
      address,
      number,
      descptn,
      number2,
      position
    })
  
    res.json({
      memberDetails
    })
  }
 

};

const memberDisplay = async(req,res)=>{
  const allMembers = await member.find();
  res.json(allMembers)
}

const createCustomer = async(req,res)=>{
  const {  name,address,product,village,district,state,nationality } = req.body;

  const customerExist = await customer.findOne({name:name});

  if (customerExist) {
    res.json({
      message: "Name already exists",
      ifError: true,
    })
  }else{
    const customerDetails = await customer.create({
      name,address,product,village,district,state,nationality
    })
  
    res.json({
      customerDetails
    })
  }
 
}

const customerDisplay = async(req,res)=>{
  const allCustomers = await customer.find();
  res.json(allCustomers)
}

const createOrder = async(req,res)=>{
  const {  ordernum,  customer,   product, item,  date,   status } = req.body;

  const orderExist = await order.findOne({ordernum:ordernum});

  if (orderExist) {
    res.json({
      message: "Order Number already exists",
      ifError: true,
    })
  }else{
    const orderDetails = await order.create({
      ordernum,  customer,   product, item,  date,   status
    })
  
    res.json({
      orderDetails
    })
  }
}

const orderDisplay = async(req,res)=>{
  const allOrders = await order.find();
  res.json(allOrders)
}

module.exports = {
  display,
  test,
  signup,
  login,
  addBook,
  deleteBook,
  updateBook,
  books,
  clientCreate,
  clientDeet,
  createMember,
  memberDisplay,
  createCustomer,
  customerDisplay,
  createOrder,
  orderDisplay
};
