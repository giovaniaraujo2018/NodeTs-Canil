import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface cadpetsInstance extends Model {
      idPet: number;
      PetNome: string;
      PetDtaNascimento:Date; 
      PetImagem:string;
      PetidCor:number;
      PetidSexo:number;
      PetidTipoAnimal:number;

}

export const Cadpet = sequelize.define<cadpetsInstance>("petshope", {
  
     idPet: {
        primaryKey: true,
        type:DataTypes.INTEGER,



     },

     PetNome: {
         type: DataTypes.STRING
     },

     PetDtaNascimento: {

          type:DataTypes.DATE

     },
   
     PetImagem: {

        type:DataTypes.STRING

   },
   
     PetidCor:{ 
  
        type:DataTypes.NUMBER
  
},

      PetidSexo:{
    
    type:DataTypes.NUMBER
},

     PetidTipoAnimal: {

        type:DataTypes.NUMBER
     }

},
{
    tableName:'cadpets',
    timestamps: false

});
   