
# Projects related to DOM 

## project link 
[Click here](https://stackblitz.com/edit/dom-project-js-tub454-kanrlk?file=1-colorChanger%2Findex.html)


# Solution code 

## project-1 : Color Changer

```javascript
const buttons = document.querySelectorAll('.button')
let body = document.querySelector('body')
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',(e)=>{
    console.log(e)
    console.log(e.target)
    body.style.backgroundColor = e.target.id
  })
})
```


## project-2 : BMI Generator

```javascript

const form = document.querySelector('form')
// this usecase will give you empty value 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
})
```


## project-3 : Digital Clock

```javascript
const clock = document.getElementById('clock')
setInterval(()=>{
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);
```

