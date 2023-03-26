const buttonMainClasses = [
  "primary",
  "secondary",
  "tertiary"
]


const buttonBehavior = [
  "default",
  "hover",
  "disabled",
  "focus",
  "loading",
  "movable"
]

const body = document.querySelector('body')

function changeButton(event){
  const randomBehavior = buttonBehavior[Math.floor(Math.random()* buttonBehavior.length)];
  const randomMainClass = buttonMainClasses[Math.floor(Math.random()* buttonBehavior.length)];
  event.target.className = `${randomMainClass} + ${randomMainClass}`
  event.target.innerText = `${randomMainClass.toString().toUpperCase()} ${randomBehavior.toString().toUpperCase()}`
}


