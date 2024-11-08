// sealing prevents properties from being added, removed but can still be changed or modified

// Freeezong prevents properties from being added, removed and modified

const rectObj = {
    name: 'rect',
    width: 10,
    height: 5
}


Object.seal(rectObj)

rectObj.color = 'darkRed' //
delete rectObj.name;
rectObj.name = 'rect3'


let des = Object.getOwnPropertyDescriptors(rectObj)
console.log(des)



const frObj = {

    name: 'square',
    width: 35,
    height: 10
}


Object.freeze(frObj)
frObj.name = 'sq2'


let desi = Object.getOwnPropertyDescriptors(frObj)
console.log(desi)


console.log('rect Object is sealed?', Object.isSealed(rectObj))

console.log('rect Object is frozen?', Object.isFrozen(rectObj))


console.log('square Object is sealed?', Object.isFrozen(frObj))

console.log('square Object is frozen?', Object.isSealed(frObj))



