class Student {
    constructor(name, branch, year, college) {
      this.name = name;
      this.branch = branch;
      this.year = year;
      this.college = college;
    }
    
    intro() {
      return `The student's name is ${this.name} of the branch ${this.branch}`;
    }
    
    detl() {
      return this.intro() + ` and is studying in their ${this.year} year in the college ${this.college}`;
    }
  }
  
  let student1 = new Student("abhi", "iiot", "first", "usar");
  console.log(student1.name);
  console.log(student1.branch);
  console.log(student1.college);
  console.log(student1.year);
  console.log(student1.intro());
  console.log(student1.detl());
  