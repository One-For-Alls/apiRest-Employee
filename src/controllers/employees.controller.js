import { pool } from '../db.js';

export const getEmployees = async (req, res) => {
    try {
        const [row] = await pool.query('SELECT * FROM employee');

        if (row.length <= 0) return res.status(404).send('Error al consultar los empleados');
        res.json(row);
    } catch (error) {
        return res.status(500).send('Error en el servidor: ' + error);
    }
};

export const getEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const [row] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);

        if (row.length <= 0) return res.status(404).send('Error al consultar el empleado');
        res.json(row);
    } catch (error) {
        return res.status(500).send('Error en el servidor');
    }
};

export const postEmployee = async (req, res) => {
    try {
        const { name, position, salary } = req.body;
        const [row] = await pool.query('INSERT INTO employee (name, position, salary) VALUES (?,?,?)', [name, position, salary]);

        if (row.affectedRows <= 0) return res.status(404).json({ message: 'Error al insertar el empleado' });
        res.json(row);
    } catch (error) {
        //console.error('error servidor');
        return res.status(500).send('Error en el servidor');
    }
};

export const putEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, position, salary } = req.body;
        const [row] = await pool.query('UPDATE employee SET name = ?, position = ?, salary = ? WHERE id = ?', [name, position, salary, id]);

        if (row.affectedRows <= 0) return res.status(404).json({ message: 'Error al actualizar el empleado' });
        res.json(row);
    } catch (error) {
        return res.status(500).send('Error en el servidor');
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const [row] = await pool.query('DELETE FROM employee WHERE id = ?', [id]);

        if (row.affectedRows <= 0) return res.status(404).json({ message: 'Error al eliminar el empleado' });
        res.json(row);
    } catch (error) {
        return res.status(500).send('Error en el servidor');
    }
};
