

// Creating The Player Constructor function
function player(name){

    this.name = name;
    this.level = 1;
    this.points = 0;
}


// Creating The Player Prototype Methods
player.prototype.gainXp = function(xp){ // adding xp to player

    this.points += xp;

    if(this.points >= 10){ // if the player point are greater than 10 points increase level
        this.level++;
        this.points -= 10;
    } 
    
    // else if(this.points <= 0){ 
    //     this.level--;
    // }// if the player point

}

// Describing the player Stats 
player.prototype.describe = function(){
    return `${this.name} is level ${this.level} with ${this.points} experience points.`
}


// Creating The Player Constructor 
const player1 = new player('David')
const player2 = new player('casper')

const randomXp = Math.floor(Math.random() * 10) + 1

player1.gainXp(randomXp)
player2.gainXp(randomXp)


player1.gainXp(4);
player2.gainXp(7);
player1.gainXp(5);
player2.gainXp(1);
player1.gainXp(7);
player2.gainXp(9);
player1.gainXp(5);
player2.gainXp(5);



console.log(player1.describe())
console.log(player2.describe())