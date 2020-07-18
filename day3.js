console.log("--Loop----")
 var friends1 =['A','B','C','D'];
 var search = 'D';
 for (let i = 0; i < friends1.length; i++)
 {
   if (friends1[i] == search )
   {
       console.log('found at index ' + i );
       break;
   }
   else{
       continue;
 }

 };

 console.log("--callback with parameters----")
//create a function with parameters to be used as callback
const callBackFunction = (par1 , par2) => { console.log(par1 + ' ' + par2) };

//higher order function which will accept a function as argument (callback)
const higherOrderFunction = (name1, name2, callbackWithParameters) => {
  
 //passing parameter to the callback function while calling it 
    callbackWithParameters(name1 , name2);
}

//invoke the function 
higherOrderFunction('Hello Developer', ' Using Callback', callBackFunction);

