// Debounce example. 

//Counter to make log statement different each time.

let counter = 0;

//getSuggestion will make api calls.

const getSuggestion = () => {
  console.log(document.getElementById('search').value);
  console.log('fetching data', counter++);
}

// debounce function will accept a function and delay and
// store setTimeOut() function in timer variable.
// once delay ran without clearTimeout then it will make
// function call based on passed function.

const debounce = (fn, d) => {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    },d)
  }
}

// calling showSuggestion in input element.

const showSuggestion = debounce(getSuggestion, 500);