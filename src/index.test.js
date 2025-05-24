import {ship, testFunction} from "./index.js";

test ("Check tests are working", () => {
    expect(testFunction("Hi")).toBe("Hello")
})