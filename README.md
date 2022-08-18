# Complete guide in implementation of stack in Javascript



**Summary**: learning stack data structure is very important because it is used in many algorithms we are going to learn the implementation of the stack, and I Hope You find it helpful.

---

> what it is?
> Prerequisites
> Implementation
> uses cases
> Addition Info
---

So, In the first place what is stack is a data structure that follows the LIFO principle meaning the last in first out you get the idea, stack uses an array and mainly two methods which are pop and push

- pop remove the first element which is the last to be inserted into the list

- push add the last element in the array

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2xovh7aueiuagla3j559.jpg)


**Prerequisites**

- Know javascript

- Nothing else

Know it is time to code know we have a solid foundation of a stack implemented in js. Let's go and get it.


```
let stack = [];

function push(num) {
  stack.push(num);
  console.log(stack);
}



function pop() {
  stack.pop();

  console.log(stack);
}

push(1);
push(2);
push(3);
push(4);
push(5);

pop();
```

Time to break the code and understand it ⛹🏿⛹🏿🏋🏿‍♂️🏋🏿

```
let stack = [];
```
declare a variable and sign it to an empty array


```
function push(num) {
  stack.push(num);
  console.log(stack);
}
```
Well, well. I know I did it with a function but there is no problem here I can say do as your what do let me limit your imagination. I am doing simple implementation passing number as any argument and then pushing it to the stack we created

```
function pop() {
  stack.pop();

  console.log(stack);
}
```
I am doing the same remember pop removes the first element which was inserted last in the list.


```
push(1);
push(2);
push(3);
push(4);
push(5);

pop();
```
I am calling the functions here and after I insert all the elements, I do pop to remove 5 in the array. Let's take a look at my terminal


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pqkddjpzu6pyqs74n04u.png)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0cwbr796afftu1it8pm6.png)


**Uses cases**


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b69fzdcuz6azzxpyn1qy.jpg)

**Addition Info**

**String reverse**

We are going to see one of the applications of the stack we are to reverse the string given as input then we reverse the string because I love you, people, we are going even to see a palindrome problem.



![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9v1hez6v2519rzvkko77.png)

I know I am doing it strangely but I what to introduce a new concept in js which makes it shine that is why it looks strange. Now it is time to break it into pieces

```
const reverse = (str) => {
  const stackReverse = [];
  for (let i = 0; i < str.length; i++) {
    stackReverse.push(str[i]);
    console.log('stack index', str[i], stackReverse);
  }
```
The function here is pretty basic we are passing an argument and then creating any array where we are going to store our letters.

So the second step is to iterate through the string after we are pushing each letter of the string to an array named stackReverse and consoling it 


```
 let reverseStr = '';
  while (stackReverse.length > 0) {
    reverseStr += stackReverse.pop();
  }
```
still, in the function, we make a while that checks if stackRverse length is great than zero if not we keep popping the array and every element popped is stored in reverseStr.

```
 if (reverseStr === str)
    return console.log('true the word is palindrome', reverseStr);

  return console.log('false the word is not palindrome', reverseStr);

  
};
```

Now things become a little strange in The if statement, I am going to give you a video on youtube which explains it well.

YouTube explains it well: 

{% youtube EumXak7TyQ0&t=541s %}

```
reverse('refer');

reverse('hello');
```

just calling the function to see if the word are palindrome Thanks for reading❤️😍👌 It has not been easy to reach this far


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b3ecq0lvo1xzp5ftdaq3.png)

This is what I printed in the terminal

