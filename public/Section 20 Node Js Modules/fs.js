// const fs = require('fs');
const fs = require("fs/promises");

// Writing files in Node.js

// Call Back Method[Default]

// fs.writeFile('danish.txt', 'Hello Chinedu', (error) =>{
//     if(error) throw error;
//     console.log('File Using Callback saved!');
// })

// // Promise Method

// fs.writeFile('promise.txt', 'Hello Promise', 'utf8').then((success) =>{
//     console.log('File with Promise saved!');
// }).catch((error) =>{

//     console.log(error);
// })

// //Sync Method

// fs.writeFileSync('sync.txt', 'Hello Sync');
// console.log('File with Sync saved!');

// Promise Method With Async Function

async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content, "utf8");
    console.log(`File ${filename} saved with Promise!`);
  } catch (error) {
    console.log(error);
  }
}

createFile(
  "async.txt",
  'let testing = "Hello Async created with Promise/Async Function";'
);

// Reading files in Node.js

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    console.log(data);
    console.log(`File ${filename} read with Promise!`);
  } catch (err) {
    console.log(err);
  }
}

readFile("async.txt");
readFile("async.js");

// Deleting Files

// async function deleteFile(filename) {
//   try {
//     await fs.unlink(filename);
//     console.log(`File ${filename} has been deleted successfully`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// deleteFile("async.js");


// Rename A File

async function renameFile(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
    console.log(`File ${oldName} has been renamed to ${newName}`);
  } catch (err) {
    console.log(err);
  }
}

renameFile("async.txt", "renamed_async.txt");


// Creating a Folder

async function createFolder(folderName) {
    try{
        await fs.mkdir(folderName);
        console.log(`Folder ${folderName} has been created`);
    }
    catch(err){
        console.log(err);
    }
}

createFolder("new_folder");

// Append the new file
async function appendToFile() {
    try {
        await fs.appendFile('danish.txt', '\nThis content is appended.');
        console.log('Danish file appended successfully.');
    } catch (err) {
        console.error('Error appending to the file:', err);
    }
}

appendToFile();

// Create a file inside a folder
async function createFileInFolder() {
    const folderPath = './newFolder';
    const filePath = `${folderPath}/newFile.txt`;

    try {
        await fs.mkdir(folderPath, { recursive: true });
        await fs.writeFile(filePath, 'This is the file inside the folder.');
        console.log('File created successfully inside the folder.');
    } catch (err) {
        console.error('Error creating the file or folder:', err);
    }
}

createFileInFolder();
