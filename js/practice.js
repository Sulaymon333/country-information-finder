let user = {
  paid: true,
  attributes: {
    id: 43020233,
    description: {
      name: "tom",
      age: 23,
      level: 2
    }
  }
}

// without variables this is what we must do
console.log(user.attributes.description.name)


// OPTION 1
// lets try assigning them to variables: 
// let name = user.attributes.description.name
// let age = user.attributes.description.age
// let level = user.attributes.description.level
// console.log(name)
// This is terrible because I have to write it out so many times 

// OPTION 2
// let's try a shorter way: 
// let description = user.attributes.description
// name = description.name
// age = description.age
// level = description.level
// console.log(name)
// that's marginally less typing, but still bad


// DESTRUCTURE IT
// instead of this: 
// let description = user.attributes.description
// name = description.name
// age = description.age 
// level = description.level

// we can do this: 
let {
  name,
  age,
  level
} = user.attributes.description
console.log(level)
// nice