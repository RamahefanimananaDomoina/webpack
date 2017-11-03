
import chaine from './hello.js'

let demo = document.getElementById('demo');
demo.innerHTML= chaine;

// if(module.hot){
//     module.hot.accept('./hello.js', function(){
//         let c = require('./hello.js')
//         demo.innerHTML = c.default;
//     })
// }