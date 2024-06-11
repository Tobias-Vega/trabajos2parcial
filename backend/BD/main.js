const express = require("express");
const app = express();

app.use(express.json())

const { newConnection } = require("./db")
//Obtener los books
app.get('/', async (req, res) => {

    const connection = await newConnection()

    const result = await connection.query('SELECT * FROM books')

    console.log(result)

    res.json(result[0])



    connection.end()
})

//Obtener por id
app.get('/books/:id', async (req, res) => {
    const connection = await newConnection()
    const id = req.params.id

    const result = await connection.query('SELECT * FROM books WHERE id = ?', id)

    res.status(200).json(result[0])

    connection.end()
})

//Crear un nuevo libro
app.post('/books', async (req, res) => {

    const connection = await newConnection()

    const { title, author } = req.body

    connection.query(`INSERT INTO books (title, author) values (?,?)`, [title, author])

    res.send("Book creado correctamente")

    connection.end()
})

// Actualizar un libro
app.patch('/books/:id', async (req, res) => {
    const connection = await newConnection();
    const id = req.params.id;
    const { title, author } = req.body;

    try {
        const existingBook = await connection.query('SELECT * FROM books WHERE id = ?', id);

        if (existingBook[0].length === 0) {
            return res.status(404).json({ error: 'El libro no fue encontrado' });
        }

        if (title) {
            await connection.query('UPDATE books SET title = ? WHERE id = ?', [title, id]);
        }
        if (author) {
            await connection.query('UPDATE books SET author = ? WHERE id = ?', [author, id]);
        }

        res.status(200).json({ message: 'Libro actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar el libro:', error);
        res.status(500).json({ error: 'Hubo un error al actualizar el libro' });
    } finally {
        connection.end();
    }
});





//Eliminar un libro
app.delete('/books/:id', async (req, res) => {
    const connection = await newConnection()
    const id = req.params.id

    const result = await connection.query('DELETE FROM books WHERE id = ?', id)

    res.status(200).json(result[0])

    connection.end()
})

app.listen(4000);
console.log("servidor iniciado");

