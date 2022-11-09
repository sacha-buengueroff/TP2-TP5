class AlumnosMemDAO {

    constructor() {
        this.alumnos = [
            { id: '1', nombre: 'Juan', apellido: 'Perez', curso: 'A', nota: 9 },
            { id: '2', nombre: 'Ana', apellido: "Riberti", curso: 'C', nota: 7 },
        ]
    }
    
    findAlumno = async id => {
        return this.alumnos.find(alumnos => alumnos.id == id) 
    } 
    
    findAlumnos = async () => this.alumnos
    
    saveAlumno = async alumno => {
        alumno.nota = parseInt(alumno.nota)
        const id = parseInt(this.alumnos[this.alumnos.length-1].id) + 1
        alumno.id = String(id)
        this.alumnos.push(alumno)
        return {status: 'ok'}
    }

    getAverageAndAmmount = async () => {
        let average
        let ammount
        if (this.alumnos.length > 0) {
            let sum = this.alumnos.reduce((prev,current) => {
                return prev + current.nota
            }, 0)
            average = sum / this.alumnos.length
            ammount = this.alumnos.length
        }
        else {
            average = 0
            ammount = 0
        }
        return {'Promedio de notas': average, 'Cantidad de notas': ammount}
    }
}


export default AlumnosMemDAO