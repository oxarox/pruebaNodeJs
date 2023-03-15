import { getConnection, sql, queries } from '../database/index.js';

export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProduct);

        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const createNewProduct = async (req, res) => {
    const { Id, Name, Description, Quantity } = req.body;
    if (!Id || !Name || !Description || !Quantity) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' });
    }
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('Id', sql.Int, Id)
            .input('Name', sql.VarChar, Name)
            .input('Description', sql.Text, Description)
            .input('Quantity', sql.Int, Quantity)
            .query(queries.addNewProduc);
        return res.json(result + { Id, Name, Description, Quantity });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('Id', id)
            .query(queries.getProductById);
        res.send(result.recordset[0])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const deleteProductById = async (req, res) => {
    const { id } = req.params

    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('Id', id)
            .query(queries.deleteProduct);
        res.send(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}
export const getTotalProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query(queries.getTotalProduct);
        res.json(result.recordset[0]['cantidad'])
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const updateProductById = async (req, res) => {
    const { id } = req.params
    const { Name, Description, Quantity } = req.body;
    if (!Name || !Description || !Quantity) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' });
    }
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('id', id)
            .input('Name', Name)
            .input('Description', Description)
            .input('Quantity', Quantity)
            .query(queries.updateProduct);
        res.send(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}