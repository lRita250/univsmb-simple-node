const fs = require("fs");
const { workerData } = require("worker_threads");
class GestionFichier{
    constructor(File){
        this.file = File
    }
    read(){
        this.contenu = fs.readFileSync(this.file,{encoding:'utf8',flag:'r'})
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
let myfile = new GestionFichier('text.txt')
myfile.read()
myfile.write('New ... \n ')
//myfile.delete()

//class GestionFichierJson extends GestionFichier
