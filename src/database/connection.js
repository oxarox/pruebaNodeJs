import sql from 'mssql';

const dbsettings ={
    user : process.env.dbuser,
    password : process.env.dbpassword,
    server : process.env.dbserver,
    database : process.env.dbdatabase
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbsettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export {sql};