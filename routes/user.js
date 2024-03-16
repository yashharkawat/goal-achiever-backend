import express from 'express';
const router = express.Router();
import UserServices  from '../functions/user/UserServices.js';

router.get('/', (req,res)=>{
    console.log("hello")
    const {params , body} = req;

    const finalResponse = UserServices.getUsers(params, body);
    console.log("hii");
    res.send(finalResponse);
})

export default router;