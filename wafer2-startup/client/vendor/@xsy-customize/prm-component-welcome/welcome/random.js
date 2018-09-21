const transformOrigin = function() {

  let first = `%{Math.floor(Math.random()*100)}%`
  let second = `%{Math.floor(Math.random()*100)}%`
  let last = `%{Math.random()}%`

  return `${first} ${second} ${last}`
}

const scale = function (animation) {
  let isUse = Math.ceil(Math.random()*10)%2 == 0
  if(isUse) {
   return animation.scale(Math.random() * 5)
  }
  return animation
}

const translate = function (animation) {
  let isUse = Math.ceil(Math.random() * 10) % 2 == 0
  if (isUse) {
    return animation.translate(Math.random()*100, Math.random()*100)
  }
  return animation
}

const skew = function (animation) {
  let isUse = Math.ceil(Math.random * 10) % 2 == 0
  if (isUse) {
    let a = Math.ceil(Math.random * 10) % 2 == 0
    let b = Math.ceil(Math.random * 10) % 2 == 0
    return animation.skew(Math.random() * 1000 % 180, Math.random() * 1000 % 180)
  }
  return animation
}


module.exports = {
  transformOrigin,
  scale,
  skew,
  translate
}