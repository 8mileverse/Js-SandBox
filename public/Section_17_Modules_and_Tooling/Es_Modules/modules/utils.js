const messageHandler = {
    id: 1,
    text: 'Hello From Handler Jackson',
}

// module.exports = messageHandler;


function capitalizeWord(str){
 return str
  .toLowerCase()
 .split(' ')
 .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
 
}

// module.exports = capitalizeWord; // using common js module

// export default capitalizeWord   // using es modules


export{
    messageHandler, capitalizeWord
}