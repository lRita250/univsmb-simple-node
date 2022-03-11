const GestionFichier =  require('./gestion.js')
const GestionFichierJson = require('./jsonfile.js')

//Part 1 : Lecture fichier
let myfile = new GestionFichier('text.txt')
//myfile.affichage()
myfile.read()
myfile.write('New ... \n ')
//myfile.delete()


//Part 2 : Lecture fichier Json
let monficherJson = new GestionFichierJson('MonfichierJson.js')
monFichierJson.ReadJson()