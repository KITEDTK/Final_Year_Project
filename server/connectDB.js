const sql = require("mssql/msnodesqlv8");
const config = {
    user: 'sa',
    password: '123',
    server: 'localhost', 
    database: 'EcommerceClothes',
    driver:"msnodesqlv8",
    synchronize: true,
    trustServerCertificate: true,
  };
const conn = new sql.ConnectionPool(config).connect().then(pool=>{
    //console.log('db connect sucess');
    return pool
})
module.exports ={conn: conn,sql:sql};