const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let array = [];

rl.question("What's your name? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  array.push(answer)
  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    array.push(answer)
    rl.question("What do you listen to while doing that? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
      array.push(answer)
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        array.push(answer)
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
          array.push(answer)
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
            array.push(answer)
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
              array.push(answer)
              rl.close();
              console.log (`${array[0]} love listening to ${array[2]} while ${array[1]}, devouring ${array[4]} for ${array[3]}, prefers ${array[5]} over any other sport, and is amazing at ${array[6]}.`)
            });
          });
        });
      });
    });
  });
});



// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!


// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.