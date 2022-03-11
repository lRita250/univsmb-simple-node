const fs = require("fs");
const { workerData } = require("worker_threads");
class GestionFichier{
    constructor(File){
        this.file = File
    }
    read(){
        this.contenu = fs.readFileSync(this.file,{encoding:'utf8',flag:'r'})
        return this.contenu
        //console.log(this.contenu)
        this.affichage()
    }

    write(contenu){
        fs.writeFileSync(this.file, '\n' + contenu, {encoding:'utf8',flag:'a+'})
    }

    affichage(){
        if(this.contenu != undefined)
            console.log('Mon contenu : \n' + this.contenu)
    }

    delete(){
        fs.rmSync(this.file)
    }

}

module.exports = GestionFichier