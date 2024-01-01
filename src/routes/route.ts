import express, {Request,Response} from "express";
import {findTasks,createTasks,updateTasks,deleteTasks,findTaskById} from '../controllers/homepageController';
const  router = express.Router();

router.get('/home',findTasks);
router.get(`/home/:id`,findTaskById);
router.post('/home',createTasks);
router.put('/home/:id',updateTasks);
router.delete('/home/:id',deleteTasks);

export{router}