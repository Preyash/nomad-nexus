import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product_db',
  });

  const [rows] = await connection.query('SELECT * FROM products');
  res.status(200).json({ products: rows });
}
