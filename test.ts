import hashMap from './class/hashMapClass'

let myHashMap = new hashMap()

for (let i = 0; i < 10; i++) {
  myHashMap.set(i, 'string' + i)
  myHashMap.delete(i)
}

myHashMap.set(1, 'string')
myHashMap.delete(3)
myHashMap.set(1, 'string1')
myHashMap.set(3, 'string3')
myHashMap.delete(4)
myHashMap.set(5, 'string5')
myHashMap.delete(3)

console.log(myHashMap)
