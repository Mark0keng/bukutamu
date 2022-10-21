import { Sequelize, DataTypes } from "sequelize"
import db from "../config/Database.js"

const Guest = db.define('guests', 
{
    nama: DataTypes.STRING,
    nip: DataTypes.STRING,
    unit: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.TEXT,
}, {
    paranoid: true,
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
})

export default Guest

await db.drop()
await db.sync()
