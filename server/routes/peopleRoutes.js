import express from 'express';
import { getAllPeople, postPeople, getPerson, UpdatePerson, deletePerson } from '../controllers/peopleControllers.js';

const peopleRoutes = express.Router();

peopleRoutes.get('/', getAllPeople);
peopleRoutes.post('/', postPeople);
peopleRoutes.get('/:id', getPerson);
peopleRoutes.patch('/:id', UpdatePerson);
peopleRoutes.delete('/:id', deletePerson);

export default peopleRoutes;