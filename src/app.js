//1. server k instance ko create krna aur server ko configure krna kaun kaun se middle ware h kaun kaun se api h 
const express= require("express");  //2. server bnane k liye import kiye 



const app = express()  // 3. server ka instance create ker liye h  but server hm server.js k file me start krenge 

module.exports=app  // 4. server me chalu krne k liye isko export krna hoga 

// to connnect with mongodb we need a package so npm i mongoose 