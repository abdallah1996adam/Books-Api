import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import env from '../../config/env.js';
import ApiError from "../../helpers/ApiError.js";

class UserController {
  #models;
  constructor(models) {
    this.#models = models;
  }
  getAll = async (req, res, next)=>{
    try {
      const userId = req.userId
      const users = await this.#models.User.findAll()
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
  login = async (req, res, next) => {
    const {email, password} = {...req.body}
    console.log(email, password);

    try {
      if(!email || !password)
        throw new ApiError(403, 'invalid email or password')
      
      const user = await this.#models.User.findOne({where : {email}})
      if(!user){
        throw new ApiError(403, 'user not Found !!!')
      }

      const reslut = await bcrypt.compare(password, user.password)
      if(!reslut)
        throw new ApiError(401, 'incorrect email or password')

        const token = jwt.sign({id:user.userId}, env.jwt_secret, {expiresIn:'3 hours'})
        res.header('Authorization', `Barer ${token}`)
      res.status(200).json({message:"helop"})
    } catch (error) {
      next(error);
    }
  };
  signUp = async(req, res, next)=>{
    const {email, password} = {...req.body}
    try {
      const hash = await bcrypt.hash(password, 10)
      const newUser = {email, password:hash}
      const user = await this.#models.User.create(newUser)

      res.status(200).json(user)

    } catch (error) {
      next(error)
    }
  }
}

export default UserController;
