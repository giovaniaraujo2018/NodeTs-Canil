import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'; 
import { Op } from 'sequelize';
import { Usuarios} from '../models/Usuarios';

     
export const loginaction = async (req: Request, res:Response)=> {
   
   let User = await Usuarios.findAll();
    const UsuarioEmail = req.query.email;
    const UsuarioSenha = req.query.password;
     
   
    res.render('pages/login',{
        menu: createMenuObject('login'),
        banner:{
             title:'Peixes',
             background:'banner_fish.jpg'

        },
        User
});

}