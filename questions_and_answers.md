<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
    Answer is A: {}, 
    
    because first time just decleard greeting with no value and second time update value is {} this . and consolo log greetign so answer is A. 
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
  I think i will run same code in VS Js code and run then i can find nothing because you can't write a code console log and you not a decleared a variable then console log variable then you can find answer and answer is "12" as a string. and need before you deleared variable and console log. 

  Otherwise I can't find any answer.
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
  Asnwer is A: ['🍕', '🍫', '🥑', '🍔']  
  
  because you can only consol.log food so node javascript return value is only food value as a array. and you can print info then you can get only a object as a { favoriteFood: '🍝' } this value because you can a prind as a favorite food value and then value is food 0 index and then change valu info.favoritefood is a '🍝' this. 
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
    Answer is B: `Hi there, undefined` 
    
    because you can consol log and call a just function not giving a arguments so this reason you using return es6 back tik and text a 'Hi There' and just call a function without arguments and you can use function one parameters so parametners undefind because funtion not find any parameters.   
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
    
    Right Answer is C: 3 

    Because main reson i can decleared a condition when i can find nums value then condition is value + 1 it's means first time count value 0 and if condition find first index 0 and 0 value is false so no conditoin apply and count value is same 0. then forEach call and then find nums 2nd index and value is 1 is a condition true then pass if condition and check count value is 0 and + 1 so now count valu is 1 because 0+1 is 1 . and then agait heat condition because condtion value is 2 it's true value then check coundition and count value now is 1 so 1 + 1 is 2 so count set value 2 then check if condition value is true because if condition value now 3 then check condition and check count value and count value is 2 so 2+1 is 3 now set count value is 3 and then check if condition value and value is false because array index end so now if condition false and forEasy is end and now count value is 3 and then check consol.log variable count value and now count value is 3 so print 3. 
</p>
</details>
