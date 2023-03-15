export const queries = {
    getAllProduct: 'SELECT * FROM Products',
    addNewProduc:
        'INSERT INTO Products (Id, Name, Description, Quantity)'
        + ' VALUES (@Id, @Name, @Description, @Quantity)',
    getProductById: 'SELECT * FROM Products WHERE Id = @Id',
    deleteProduct: 'DELETE FROM Products WHERE Id = @Id',
    getTotalProduct: 'SELECT COUNT(*) as cantidad FROM Products',
    updateProduct:
        'UPDATE Products SET'
        + ' Name = @Name,'
        + ' Description = @Description,'
        + ' Quantity = @Quantity'
        + ' WHERE Id = @id ',
}