function foo(event) {
  event.preventDefault();
    var firstname = document.getElementById('fname').value;
    localStorage.setItem('firstname', firstname);
   
console.log(firstname);
    // console.log(firstname);
    var lastname = document.getElementById('lname').value;
    localStorage.setItem('lastname', lastname);

    var mothername = document.getElementById('mothername').value;
    localStorage.setItem('mothername', mothername);

    var fathername = document.getElementById('fathername').value;
    localStorage.setItem('fathername', fathername);

    var address = document.getElementById('address').value;
    localStorage.setItem('address', address);

    var gender = document.querySelector(
      'input[name=inlineRadioOptions]:checked'
    ).value;
    localStorage.setItem('gender', gender);

    var dob = document.getElementById('dob').value;
    localStorage.setItem('dob', dob);

    var pincode = document.getElementById('pincode').value;
    localStorage.setItem('pincode', pincode);

    var course = document.getElementById('course').value;
    localStorage.setItem('course', course);

    var email = document.getElementById('email').value;
    console.log(email)
    localStorage.setItem('email', email);

    var state = document.getElementById('state').value;
    localStorage.setItem('state', state);

    var city = document.getElementById('city').value;
    localStorage.setItem('city', city);

    var password = document.getElementById('password').value;
    localStorage.setItem('password', password);
    // var state = document.querySelector('select[name=na]:selected');
    // localStorage.setItem('state', state);

    // var state = document.getElementById('state');
    // var value = e.value;
    // var text = e.options[e.selectedIndex].text;
    // localStorage.setItem('state', text);

    const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

  if (!indexedDB) {
    console.log('IndexedDB could not be found in this browser.');
  }

  // 2
  const request = indexedDB.open('userDatabase', 1);

  request.onerror = function (event) {
    console.error('An error occurred with IndexedDB');
    console.error(event);
  };

  request.onupgradeneeded = function () {
    //1
    const db = request.result;

    //2
    const store = db.createObjectStore('user', { autoIncrement:true});

    //3
    store.createIndex('Email_', ['email'], { unique: true });

    // 4
    store.createIndex('Password_', ['password'], {
      unique: false,
    });
   
  };

  request.onsuccess = function () {
    console.log('Database opened successfully');

    const db = request.result;

    // 1
    const transaction = db.transaction(['user'], 'readwrite');

    //2
    const store = transaction.objectStore('user');
    const colourIndex = store.index('Email_');
    const makeModelIndex = store.index('Password_');

  

    //3
  
    store.add({  colour: "black" , make: 'Toyota',email:email,firstname:firstname,password:password });
   
   
    
  
    // store.put({ id: 2, colour: 'Red', make: 'Kia' ,email:email});
    // store.put({ id: 3, colour: 'Blue', make: 'Honda' ,email:email});
    // store.put({ id: 4, colour: 'Silver', make: 'Subaru' ,email:email});

    //4
    const idQuery = store.get(1);
    const colourQuery = colourIndex.getAll(['Red']);
    const colourMakeQuery = makeModelIndex.get(['Blue', 'Honda']);

    5
    idQuery.onsuccess = function () {
      console.log('idQuery', idQuery.result);
    };
    colourQuery.onsuccess = function () {
      console.log('colourQuery', colourQuery.result);
    };
    colourMakeQuery.onsuccess = function () {
      console.log('colourMakeQuery', colourMakeQuery.result);
    };
  

    // 6
    transaction.oncomplete = function () {
      db.close();
    };
  };

}
  
foo();