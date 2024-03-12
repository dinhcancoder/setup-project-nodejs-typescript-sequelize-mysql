import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface UserAttributes {
  user_id: string
  first_name: string
  last_name: string
  email: string
  password: string
  phone_number: string
  role_id: string
  createdAt: Date
  updatedAt: Date
}

interface UserCreationAttribute extends Optional<UserAttributes, 'user_id' | 'role_id' | 'createdAt' | 'updatedAt'> {}

class User extends Model<UserAttributes, UserCreationAttribute> implements UserAttributes {
  public user_id!: string
  public first_name!: string
  public last_name!: string
  public email!: string
  public password!: string
  public phone_number!: string
  public role_id!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

User.init(
  {
    user_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    first_name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    last_name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING
    },
    phone_number: {
      allowNull: true,
      type: DataTypes.STRING
    },
    role_id: {
      allowNull: true,
      type: DataTypes.STRING,
      defaultValue: 'bcb8d4a3-1a97-474d-bd1e-1d775e75fp0a'
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  },
  {
    timestamps: true,
    sequelize: db,
    underscored: false,
    modelName: 'User',
    tableName: 'Users'
  }
)

export default User
