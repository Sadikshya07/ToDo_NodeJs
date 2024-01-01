import { task } from './../model/tasks';
import express, {Request,Response} from "express";

const findTasks = async(req:Request,res:Response)=>{
    try{
        const results = await task.find();
        res.status(200).json({
            status: "success",
            data: results,
          });
        } catch (error) {
          console.error();
        }
}
const findTaskById = async(req:Request,res:Response)=>{
    try{
        console.log(req.params);
        const results = await task.findOne({
            _id:req.params.id
        });
        res.status(200).json({
            status: "success",
            data: results,
          });
        } catch (error) {
          console.error();
        }
}
const createTasks = async(req:Request,res:Response)=>{
    try{
        const task = req.body;
        const data = {
            task
        }

        console.log(data);
        const results = await task.create(
            data
        );
        res.status(200).json({
            status: "success",
            data: results,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({
                status:"failed"
          })
        }

}
const updateTasks = async(req:Request,res:Response)=>{
    try{
        console.log(req.params);
        const task = req.body;
        const data = {
            task
        }
        console.log(data);
        const results = await task.findByIdAndUpdate(
            req.params.id, data);
        res.status(200).json({
            status: "success",
            data: results,
          });
        } catch (error) {
          console.error();
        }
}
const deleteTasks = async(req:Request,res:Response)=>{
    try{
        const TaskId = req.params.id;
        console.log(req.params.id);
        const results = await task.findByIdAndDelete(TaskId);
        res.status(200).json({
            status: "success",
            data: results,
          });
        } catch (error) {
          console.error();
        }
}
export {findTasks,createTasks,updateTasks,deleteTasks,findTaskById };