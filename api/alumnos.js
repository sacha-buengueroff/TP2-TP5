import AlumnosFactoryDAO from '../model/DAO/alumnosFactory.js'
import config from '../config.js'

class ApiAlumnos {
    
    constructor() {
        this.alumnosModel = AlumnosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    obtenerAlumnos = async id => {
        return id? await this.alumnosModel.findAlumno(id) : await this.alumnosModel.findAlumnos()
    }

    guardarAlumno = async alumno => {
        return await this.alumnosModel.saveAlumno(alumno)
    }  

    obtenerCalculosNotas = async () => {
        return await this.alumnosModel.getAverageAndAmmount()
    }
}


export default ApiAlumnos