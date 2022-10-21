import { Sequelize } from "sequelize"

const db = new Sequelize('bukutamu', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
})

export default db