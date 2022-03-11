const fichier = require('./gestion.js')

class GestionFichierJson extends GestionFichier(){
    constructor(myFile){
        super(monFichier)
    }
   ReadJson(){
    this.read(this.file)
    console.log(JSON.parse(this.contenu))
   }

}

module.exports = GestionFichierJson