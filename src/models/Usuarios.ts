import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface usuariosInstance extends Model {
    idUsuario: number;
    UsuarioEmail: string;
    UsuarioSenha: string;
}

export const Usuarios = sequelize.define<usuariosInstance>("Usuarios", {
    idUsuario: {
        primaryKey: true,
        autoIncrement:true,
              type: DataTypes.INTEGER
           
    },
    UsuarioEmail: {
        type: DataTypes.STRING
    },
    UsuarioSenha: {
        type: DataTypes.STRING,
        
    }
}, 

{
    tableName: 'usuarios',
    timestamps: false
});