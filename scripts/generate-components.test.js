const rewire = require("rewire")
const generate_components = rewire("./generate-components")
const build = generate_components.__get__("build")
const run = generate_components.__get__("run")
// @ponicode
describe("build", () => {
    test("0", async () => {
        await build("string")
    })

    test("1", async () => {
        await build("array")
    })

    test("2", async () => {
        await build("number")
    })

    test("3", async () => {
        await build("object")
    })

    test("4", async () => {
        await build(undefined)
    })
})

// @ponicode
describe("run", () => {
    test("0", async () => {
        await run()
    })
})
