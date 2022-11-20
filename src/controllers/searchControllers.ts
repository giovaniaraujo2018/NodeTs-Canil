import { Request, Response } from 'express';
import {Cadpet} from '../models/Cadpet';
import { createMenuObject } from '../helpers/createMenuObject';
import {Op} from 'sequelize';

export const search = async (req: Request, res:Response)=> {
   
      let query: string = req.query.q as string;
      
      let list = await Cadpet.findAll({

            where: {
                 PetNome: {
                  [Op.like]: `%${query}%`
                  
                  
                }
            }
            
      
               
       });
       
      if (!query) {
            res.redirect('/');
            return;
      }
     res.render('pages/page', { 
     menu:createMenuObject(' '),
     list,
     query
});

}