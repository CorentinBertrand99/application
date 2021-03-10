

const express = require('express')   // Installation d'ExpressJS 
const app = express()               // Initialisation dans une variable 

const handlebars = require('express-handlebars')    // Création d'un moteur templating qui permet de modifier dynamiquement les pages HTML du cote serveur

app.set('view engine', 'handlebars')           // On définit ce moteur comme celui de notre application avec set()
app.engine('handlebars', handlebars({           // Création des layouts pour mettre en forme la strucutre générale de la page web
    layoutsDir: __dirname + '/views/layouts',   // On a crée préalablement un dossier layouts contenant tous les layouts, on indique ils se situent via engine()
}))

app.get('/', function (req, res) {              // On veut servir le layout correspondant à la page demandée 
    res.render('main', {layout : 'index'})      // On cherche le layout index qui n'est d'autre que : "index.handlebars"
})

app.use(express.static('public'))

app.listen(3000, function () {                  // L'application est disponible sur le serveur local sur le port 3000  
    console.log('Votre app est disponible sur localhost:3000 !') // On l'affiche dans la console NodeJS
})
