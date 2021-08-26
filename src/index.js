import _ from 'lodash';
// import { Nijou, NAME } from './utilities'
// import * as utilities from './utilities'
// import { NAME as NAME_OF_HAM} from './utilities'
import Lion from './utilities'

// console.log(utilities.Nijou(10));
// console.log(utilities.NAME);
// console.log(NAME_OF_HAM);
console.log(Lion.say());

function component() {
    const element = document.createElement('div');
    const array = ['Hello', 'webpack', '!!']
    element.innerHTML = _.join(array, ' ')
    return element;
}

document.body.appendChild(component());
