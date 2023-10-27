import { Router } from 'express';
import { deleteEmployee, getEmployees, getEmployee, postEmployee, putEmployee } from '../controllers/employees.controller.js';

const router = Router();

router.get('/', (req, res) => {
    res.send('pagina principal')
});

router.get('/employees', getEmployees);
router.get('/employee/:id', getEmployee);
router.post('/employee', postEmployee);
router.put('/employee/:id', putEmployee);
router.delete('/employee/:id', deleteEmployee);

export default router;