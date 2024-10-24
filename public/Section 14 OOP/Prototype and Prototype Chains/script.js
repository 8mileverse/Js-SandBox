function Rectangele(name, width, height) {
    this.name = name;
    this.width = width;
  
    this.height = height;
  
    this.calculateArea = () =>{
      return this.width * this.height;
    };
  }
  
  const rect1 = new Rectangele("rect1", 10, 20);
  console.log(rect1);

  console.log(Object.getPrototypeOf(rect1))