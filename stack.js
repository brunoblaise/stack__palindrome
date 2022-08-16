let stack = [];

function push(num) {
  stack.push(num);
  console.log(stack);
}

const arrayAdd = (arr) => {
  let numbers = [];
  arr.forEach((number) => {
    numbers.push(number);

    console.log(number);
  });
  return numbers;
};

function pop() {
  stack.pop();

  console.log(stack);
}

push(1);
push(2);
push(3);
push(4);
push(5);
push(6);
push(7);
push(8);
push(9);
push(10);

console.log('arr', arrayAdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));
//pop method
pop();

//reverse function

const reverse = (str) => {
  const stackReverse = [];
  for (let i = 0; i < str.length; i++) {
    stackReverse.push(str[i]);
    console.log('stack index', str[i], stackReverse);
  }

  let reverseStr = '';
  while (stackReverse.length > 0) {
    reverseStr += stackReverse.pop();
  }
  if (reverseStr === str)
    return console.log('true the word is palindrome', reverseStr);

  return console.log('false the word is not palindrome', reverseStr);

  return reverseStr;
};

reverse('refer');

reverse('hello');

reverse('123455670998');
