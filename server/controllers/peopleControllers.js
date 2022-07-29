import express from 'express';
import mongoose from 'mongoose';
import Person from '../models/person.js';


export const getAllPeople = async (req, res) => {

    try {
        const peopleData = await Person.find();
        res.status(200).json(peopleData);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postPeople = async(req, res) => {

    const { name, age, height, nationality } = req.body;
    try {

        const tempPerson = new Person({
            name,
            age,
            height,
            nationality
        });

        await tempPerson.save();
        res.status(200).json(tempPerson);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const getPerson = async (req, res) => {

    const {id} = req.params;

    try {
        const person= await Person.findById(id);
        res.status(200).json(person);
    } catch (error) {
        res.status(404).json({
            error:error.message
        });
    }
}

export const UpdatePerson = async(req, res) => {
    const {id} = req.params;
    try {
        const updatedPerson = await Person.findByIdAndUpdate(id, req.body);
        res.status(200).json(updatedPerson);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

export const deletePerson = async (req, res) => {
    const {id} = req.params;
    try {
        const deletePerson = await Person.findByIdAndDelete(id);
        res.status(200).json(deletePerson);
    }catch(error) {
        res.status(400).json({message: error.message});
    }
}


export default express.Router();
