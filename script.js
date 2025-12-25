const input = document.querySelector("#box");

// for taking numbers
function getNum(n) {
  input.value += n;
}

// for taking signs
function getSign(sign) {
  let exp = input.value;
  let lastChar = exp[exp.length - 1];

  // preventing sign befor numbers
  if (exp.length === 0) {
    return;
  }

  // preventing adding more than 1 sign
  if (/[0-9]/.test(lastChar)) {
    input.value += sign;
  }
}

// for evaluating answer
function result() {
  let exp = input.value;

  //handle null condition
  if (exp.length === 0) {
    return;
  }

  ans = eval(input.value);

  input.value = ans;
}

// for removing all expression
function remove() {
  input.value = "";
}
// sign toggle

function toggleSign() {
  let exp = input.value;
  let firstChar = exp[0];

  //handle null & decimal point
  if (exp != "" && firstChar != ".") {
    if (firstChar === "-") {
      input.value = input.value.substring(1);
    } else {
      input.value = "-" + input.value;
    }
  }
}

//folat numbers
function floatVal() {
  let exp = input.value;
  let lastChar = exp[exp.length - 1];

  //handle null and opertor
  if (exp.length === 0 || /[+\-*/]/.test(lastChar)) {
    input.value += "0.";
    return;
  }
  //handle numbers

  let parts = exp.split(/[+\-*/]/);
  let lastPart = parts[parts.length - 1];

  if (!lastPart.includes(".")) {
    input.value += ".";
  }
}

//removing last value
function removeLast() {
  let exp = input.value;
  let size = exp.length;

  if (size > 0) {
    input.value = exp.slice(0, -1);
  }
}
