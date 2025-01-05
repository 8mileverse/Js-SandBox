function anagram(str1, str2){
    const aCharMap = buildCharMap(str1);
    const bCharMap = buildCharMap(str2);

    // console.log(aCharMap,   bCharMap);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false;
    }else{
        return true;
    }

    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]){
            return false;
        }
}

}


anagram('hello', 'world');

function buildCharMap(str){
    const charMap = {};

    for(let char of str.toLowerCase().replace(/[^a-z0-9]/g, '')){
        //for each character of the character map string

        charMap[char] = charMap[char] + 1 || 1;

    }

    return charMap;
}


module.exports = anagram;