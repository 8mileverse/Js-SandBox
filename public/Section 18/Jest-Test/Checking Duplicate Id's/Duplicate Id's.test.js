const duplicateIds = require("./Duplicate Id");

describe("duplicateIds", () => {
  let root;
  beforeEach(() => {
    console.log('beforeEach ran...');
    //Create Mock Elements to Be Tested
    root = document.createElement("div");
    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    root.appendChild(child1);
    root.appendChild(child2);
  });

  afterEach(() => {
    console.log('afterEach ran...');
    root = null;
  });
  it("should be a function", () => {
    expect(typeof duplicateIds).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof duplicateIds()).toEqual("boolean");
  });

  it("should return false for duplicates", () => {
    expect(duplicateIds()).toBeFalsy();
  });

  it("should return true for duplicate ids", () => {
    // Set Duplicate Ids

    root.id = "root";
    root.children[0].id = "child";
    root.children[1].id = "child";

    const result = duplicateIds(root);
    expect(result).toBeTruthy();
  });

  it("should return false for duplicate ids", () => {
    //Create Mock Elements to Be Tested
    // Set  Ids
    root.id = "root";
    root.children[0].id = "child1";
    root.children[1].id = "child2";

    

    const result = duplicateIds(root);
    expect(result).toBeFalsy();
  });
});
