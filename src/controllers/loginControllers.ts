import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'; 
import { Op } from 'sequelize';
import { Usuarios} from '../models/Usuarios';


     
export const login = async (req: Request, res:Response)=> {
   
       
   const dadosuser = Usuarios.build({
        
      UsuarioEmail: 'email',
      UsuarioSenha: 'password'
             
   });

    console.log (dadosuser.UsuarioEmail);
    console.log(dadosuser.UsuarioSenha);

    await dadosuser.save();


res.render('pages/login',{
   menu: createMenuObject('login'),
   banner:{
        title:'Peixes',
        background:'banner_fish.jpg'

   }
});

}