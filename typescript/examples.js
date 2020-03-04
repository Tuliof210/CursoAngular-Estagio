const array = ['cell', 'caneta', 'caderno', 'mao', 'notebook']


for (let i in array) {
  console.log(i)
}
console.log('----------------------------------------')
for (let i in array) {
  console.log(array[i])
}
console.log('----------------------------------------')
for (let i in array) {
  console.log(i, '-', array[i])
}
console.log('----------------------------------------')
for (let i of array) {
  console.log(i)
}