const enhancer = require("./enhancer.js")

it("should run the tests", function() {
   expect(true).toBe(true)
})

describe("enhancer", () => {
  describe(".succeed()", () => {
    it.todo("should add 1 to item.enhancement property if <20")
    it.todo("should return item if item.enhancement is 20")
    it.todo("should throw an error if the arg is not an object")
    it.todo("should throw an error if item.enhancement is >20")
  })

  describe(".fail()", () => {
    it.todo("should subtract 5 from durability property if item.enhancement < 15")
    it.todo("should subtract 10 from durability property if item.enhancement >= 15")
    it.todo("should subtract 1 from enhancement property if item.enhancement > 16")
    it.todo("should throw an error if the arg is not an object")
    it.todo("should throw an error if item.enhancement is > 20")
    it.todo("should throw an error if item.durability is > 100")
  })

  describe(".repair()", () => {
    it.todo("should set the item.durability property to 100")
    it.todo("should throw an error if the arg is not an object")
  })
})