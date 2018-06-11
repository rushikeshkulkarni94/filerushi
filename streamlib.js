const fs = require('fs-extra');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let srcpath='';
  let dstpath='';
let myreaddir=()=>{
   
        rl.question('Enter name of Source Directory? ', (answer) => {
            // TODO: Log the answer in a database
      
            srcpath='sourcef';
         rl.close();
          });
}
let openfolder=()=>{
    fs.readdir('sourcef', function(err, items) {
        console.log(items);
       
});
}

/* Reading A File Via Stream */
let movefile = () => {

    
    
   /*   fs.readdir(srcpath, (err, files) => {
        files.forEach(file => {
          console.log(file);
        });
      })*/
     let filename='first.txt';
    spath='sourcef'+'/'+filename;
    fs.move(spath, 'destf', err => {
        if (err) return console.error(err)
      
        console.log('success file have been moved!')
      })
}





module.exports = {
    movefile: movefile,
    myreaddir:myreaddir,
    openfolder:openfolder

}