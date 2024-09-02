console.log('Start logs')

let mycreatedElement = document.createElement('div')
var defaultView = document.defaultView
console.log(defaultView.innerWidth) // Affiche la largeur de la fenêtre associée au document
window.onload = function () {
    console.log('Largeur du viewport :', window.innerWidth)
    console.log('Hauteur du viewport :', window.innerHeight)
}
