import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface RoleAttributes {
  role_id: string
  role_name: string
  description: string
  createdAt: Date
  updatedAt: Date
}

interface RoleCreationAttributes extends Optional<RoleAttributes, 'role_id' | 'createdAt' | 'updatedAt'> {}

class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  public role_id!: string
  public role_name!: string
  public description!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Role.init(
  {
    role_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    role_name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING
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
    modelName: 'Role',
    tableName: 'Roles'
  }
)

export default Role
