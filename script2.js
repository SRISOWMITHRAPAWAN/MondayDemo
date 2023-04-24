function foo1(event) {
   
    event.preventDefault();
  var email1=document.getElementById("emaillogin").value
  var password1=document.getElementById("passwordlogin").value
  console.log(email1)
  console.log(password1)


//   const txn = db.transaction(['user'], 'readonly');
//   const store = txn.objectStore('user');

//   // get the index from the Object Store
//   const index = store.index('email');
//   // query by indexes
//   let query = index.get(email);

//   // return the result object on success
//   query.onsuccess = (event) => {
//       console.log(query.result); // result objects
//   };

//   query.onerror = (event) => {
//       console.log(event.target.errorCode);
//   }

//   // close the database connection
//   txn.oncomplete = function () {
//       db.close();
//   };

//   request.onsuccess = (event) => {
//       const db = event.target.result;
//       // get contact by email
//       getContactByEmail(db, "sriram@gmail.com");
//       console.log(db);
    
//   };




//   let idb = indexedDB.open('userDatabase', 1)
//   idb.onsuccess = () => {
//       let res = idb.result;
//       let tx = res.transaction('user', 'readonly')
//       let store = tx.objectStore('user')
//       let cursor = store.openCursor()
//       cursor.onsuccess = () => {
//           var curRes = cursor.result;
//           console.log(curRes)
//           var arr=[];
//           if (curRes) {
//               console.log(curRes.value.email);
//              arr.push([curRes.value.email])
//               curRes.continue()
//           }
//           console.log(arr);
//         //   if(email===curRes.value.email){
//         //     alert("success")
//         //   }else{
//         //     alert("failure")
//         //   }
//       }
//       }
  
    let request = indexedDB.open('userDatabase', 1)
    request.onsuccess=function(){
        const db=request.result;

        const transaction=db.transaction('user','readwrite');
        const store=transaction.objectStore("user");
        // const emailIndex=store.index("email");
        // const passwordIndex=store.index("password");

        // const emailQuery=emailIndex.get([email1])
        // console.log(emailIndex)
        // const passwordQuery=passwordIndex.get([password1])
        // emailQuery.onsuccess=function(){
        //     console.log("email",emailQuery.result);
        // }
        // passwordQuery.onsuccess=function(){
        //     console.log("password",passwordQuery.result);
        // }


        const colourIndex = store.index('Email_');
   


        const colourQuery = colourIndex.get([email1]);
      

        colourQuery.onsuccess = function () {
            console.log('EmailQuery', colourQuery.result);
            var query= colourQuery.result;
           console.log(query.email) ;
    fill(query);
    if(email1!=query.email){
        alert("error");
    }
          };
       
function fill(query){


    if(query.email===email1 && query.password===password1){
        alert("successfully logged in");
       }
  
    
    else{
        alert("wrong credentials");
    } 
}
}

}

  
 
   foo1(); 