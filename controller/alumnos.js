import ApiAlumnos from '../api/alumnos.js'

class ControladorAlumnos {
    
    constructor() {
        this.apiAlumnos = new ApiAlumnos()
    }
    getAlumnos = async (req,res) => {
        const { id } = req.params
        res.json(await this.apiAlumnos.obtenerAlumnos(id))
    }
    
    postAlumno = async (req,res) => {
        const alumno = req.body 
        res.json(await this.apiAlumnos.guardarAlumno(alumno))
    }

    getCalculos = async (req,res) => {
        res.json(await this.apiAlumnos.obtenerCalculosNotas())
    }
}


export default ControladorAlumnos