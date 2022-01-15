// //const profileDataArgs = process.argv.slice(2, process.argv.length);
// //console.log(profileDataArgs);

// // // Notice the lack of parentheses around the `profileDataArr` parameter?
// // const printProfileData = profileDataArr => {
// //   // Is the same as this...
// //   profileDataArr.forEach(profileItem => console.log(profileItem));
// // };

//   //console.log(profileDataArgs);

//   ///new code copied

//   const profileDataArgs = process.argv.slice(2, process.argv.length);
//   //const name1 = profileDataArgs[0];
//   //const github = profileDataArgs[1];
//   const [name, github] = profileDataArgs;
//   const fs = require('fs');

// // const printProfileData = profileDataArr => {
// //   // This...
// //   for (let i = 0; i < profileDataArr.length; i += 1) {
// //     console.log(profileDataArr[i]);
// //   }

// //   console.log('================');

// //   // Is the same as this...
// //   profileDataArr.forEach(profileItem => console.log(profileItem));
// // };

// // printProfileData(profileDataArgs);

// //generate HTML

// //const generatePage = () => 'Name: Jane, Github: janehub';
// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html> 
//     <html lang="en"> 
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//     </head>
  
//     <body>
//       <h1>${name}</h1>
//       <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
//   };


  //console.log(name1, github);
  //console.log(generatePage(name, github)); //why are we passing parameters in the log
//console.log(generatePage());

/* 
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
 */

  const fs = require('fs');
  const generatePage = require('./scr/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;



fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});