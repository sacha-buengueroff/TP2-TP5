import express from 'express'
import ControladorAlumnos from '../controller/alumnos.js'


export class RouterAlumnos {
    
    constructor() {
        this.router = express.Router()
        this.controladorAlumnos = new ControladorAlumnos()
    }

    start() {
        /* GET Calculos Alumnos */
        this.router.get('/calculos', this.controladorAlumnos.getCalculos)
        /* GET Alumnos */
        this.router.get('/:id?', this.controladorAlumnos.getAlumnos)
        /* POST Alumnos */
        this.router.post('/', this.controladorAlumnos.postAlumno)
    
        return this.router
    }
}