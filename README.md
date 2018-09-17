# generate_dom_id

This module facilitates generate ids for dom elements

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

```
 npm install generate_dom_id@latest -S
```

## Running the tests

```
  const GenerateDomId = require('../generate_dom_id');

  var gen = new GenerateDomId('main');

  gen.inc();
  // <input id=main_1_1 type="text" /><label for="main_1_1"></label>
  // <input id=main_1_2 type="text" /><label for="main_1_2">
  console.log(blockA(gen.getSub()));

  gen.inc();
  // <div id=main_2_1>
  //  <p id=main_2_2>Hello world</p>
  // </div>
  console.log(blockB(gen.getSub()));

  gen.inc();
  // main_3_1
  console.log(blockC(gen.getSub()));

  function blockA(gen) {
    var html = '';
    for (var i = 0; i < 100; i++) {
      var id = gen.inc();
      html +=
        '<input id='+id+' type="text" />'+
        '<label for="'+id+'"></label>';
    }
    return html;
  }


  function blockB(gen) {
    var html =
    `<div id=${gen}>
      <p id=${gen}>Hello world</p>
     </div>`;
    return html;
  }


  function blockC(gen) {
    var id = gen.inc();
    var html =
    `<div>
        <button id=${gen}>Remove</button>
     </div>`;
    return id;
  }
```


## Running the tests

```
 npm run test
```

