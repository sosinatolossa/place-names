const names = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log("All Place Names")

for (let name of names) {
    console.log(name)
}

console.log("")

const theNames = names.filter(n => n.startsWith("The"))
console.log("'The' Place Names")
for (let name in theNames) {
    console.log(theNames[name])
}