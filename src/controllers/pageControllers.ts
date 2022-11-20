import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject'; 
import { Op} from 'sequelize';
import { Cadpet} from '../models/Cadpet';
import { Usuarios } from '../models/Usuarios';

export const home = async (req: Request, res:Response)=> {
     
     let list = await Cadpet.findAll();

    
     res.render('pages/page',{
          menu: createMenuObject('all'),
          banner:{
               title:'Todos os animais',
               background:'allanimals.jpg'

          },

          list
     });
}

export const dogs = async (req: Request, res:Response)=> {
     let list = await Cadpet.findAll({

          where: {
               PetidTipoAnimal : 1
          },
          
          attributes: ['PetNome', 'PetidTipoAnimal','PetImagem','PetidCor', 'PetidSexo']
          
             
     });
       

     res.render('pages/page',{
          menu: createMenuObject('dog'),
          banner:{
               title:'Cachorros',
               background:'banner_dog.jpg'

          },
          list
     });
}
export const cats = async (req: Request, res:Response)=> {
     
     let list = await Cadpet.findAll({
          
          where: {
               PetidTipoAnimal : 2
          },
          
          attributes: ['PetNome', 'PetidTipoAnimal','PetImagem','PetidCor', 'PetidSexo']
          
             
     });
       
     
     res.render('pages/page',{
          menu: createMenuObject('cat'),
          banner:{
               title:'Gatos',
               background:'banner_cat.jpg'

          },
          list
     });
}
export const fishes = async (req: Request, res:Response)=> {

     let list = await Cadpet.findAll({
          
          where: {
               PetidTipoAnimal : 3
          },
          
          attributes: ['PetNome', 'PetidTipoAnimal','PetImagem','PetidCor', 'PetidSexo']
          
             
     });
       
     
     res.render('pages/page',{
          menu: createMenuObject('fish'),
          banner:{
               title:'Peixes',
               background:'banner_fish.jpg'

          },
          list
     });
}

export const loginaction = async (req: Request, res:Response)=> {
    
     
     res.render('pages/login')
}