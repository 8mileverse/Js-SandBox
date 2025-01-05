const gEBT = require("./getelementsbytag");

describe("getElementsByTag", () => {
  it("should be a function", () => {
    expect(typeof gEBT).toEqual("function");
  });

  it("should return an array", () => {
    expect(Array.isArray(gEBT("div"))).toBeTruthy();
  });

  it("should return an empty array", () => {
    expect(gEBT()).toEqual([]);
  });

  it("should only return the root elemnt if no tag name is passed in ", () => {
    const root = document.createElement("div");
    expect(gEBT(root)).toEqual([root]);
  });

  it("should return return the correct element", () => {
    const root = document.createElement("div");
    //add some children to the root element
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    
    const span= document.createElement("span");

root.appendChild(span)
root.appendChild(p1);

span.appendChild(p2);


const result = gEBT(root, "p")
    expect(result).toEqual([p1, p2]);



  });
});

