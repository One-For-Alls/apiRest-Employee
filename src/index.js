import express from 'express';
//import morgan from 'morgan';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';
import {PORT} from './config.js';

const app = express();

//setting

app.set('port',PORT || 3000);
//app.set('json spaces', 2);

//middleware

// app.use(morgan('dev'));
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());
//app.use(express.json());

//ROUTE
app.use(express.json());
app.use('/api',indexRoutes);
app.use('/api',employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "API NOT FOUND" })
})
// start server
app.listen(app.get('port'), () => console.log(`Server running in port ${PORT}`));