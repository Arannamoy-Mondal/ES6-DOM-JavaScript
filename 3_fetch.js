fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) // .json and .parse convert string to JSON 
      .then(json => console.log(json))