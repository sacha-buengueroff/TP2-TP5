import AlumnosMongoDAO from './alumnosMongoDB.js'
import AlumnosMemDAO from './alumnosMem.js'

class AlumnosFactoryDAO {
    static get(tipo) {
        console.log(tipo);
        switch(tipo) {
            case 'MEM' : 
                console.log("**** Persistiendo en Memoria ****");
                return new AlumnosMemDAO()
            case 'MONGO' :
                console.log("**** Persistiendo en MongoDB ****");
                return new AlumnosMongoDAO()
            default :
            console.log("**** Persistiendo en Default (Memoria) ****");
                return new AlumnosMemDAO()
        }
    }
}

export default AlumnosFactoryDAO