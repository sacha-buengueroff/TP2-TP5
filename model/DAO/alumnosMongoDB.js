import { ObjectId } from "mongodb"
import CnxMongoDB from '../DB.js'


class AlumnosMongoDAO {
    
    findAlumno = async id => {
        if(!CnxMongoDB.connection) return {}
        let alumno = await CnxMongoDB.db.collection("alumnos").findOne({_id: ObjectId(id)})
        return alumno
    } 
    
    findAlumnos = async () => {
        if(!CnxMongoDB.connection) return []
        try {
            let alumnos = await CnxMongoDB.db.collection('alumnos').find({}).toArray()
            return alumnos
        }
        catch {
            return []
        }
    } 
    
    saveAlumno = async alumno => {
        if(!CnxMongoDB.connection) return {}
        
        alumno.nota = parseInt(alumno.nota)
        await CnxMongoDB.db.collection("alumnos").insertOne(alumno)
        return {status: 'ok'}
    }

    getAverageAndAmmount = async () => {
        if(!CnxMongoDB.connection) return {}
        let average
        let ammount
        let alumnos = await CnxMongoDB.db.collection('alumnos').find({}).toArray()
        if (alumnos.length > 0) {
            let sum = alumnos.reduce((prev,current) => {
                return prev + current.nota
            }, 0)
            average = sum / alumnos.length
            ammount = alumnos.length
        }
        else {
            average = 0
            ammount = 0
        }
        return {average, ammount}
    }
}


export default AlumnosMongoDAO