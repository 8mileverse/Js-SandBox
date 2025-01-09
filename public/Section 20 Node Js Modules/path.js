const path = require('path');

const myPath = 'newFolder/newFile.txt'

// Basename()
const parsedPath = path.basename(myPath)
console.log(parsedPath)

//extname()

const ext1 = path.extname(myPath)
console.log(ext1)


// dirname()
const dir = path.dirname(myPath)
console.log(dir)

//join()

const joinedPath = path.join('newFolder', 'newFile.txt')
console.log(joinedPath)

// resolve()

const resolvedPath = path.resolve('newFolder', 'newFile.txt')
console.log(resolvedPath)

//__dirname

console.log(__dirname)

//__filename

console.log(__filename)

// relative()

const relativePath = path.relative(__dirname, myPath)
console.log(relativePath)