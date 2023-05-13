let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(function(element){
        if(element.marks>50){
            console.log(element);
        }
    });
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(element){
        if(element.marks>50){
            console.log(element);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",marks:45});
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr.filter(function(element){
        if(element.marks>50){
            console.log(element);
        }
    });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
        { id: 1, name: "sam", age: "21", marks: 50 },
        { id: 2, name: "jam", age: "22", marks: 35 },
        { id: 3, name: "ram", age: "23", marks: 99 },
      ];
      arr = arr.concat(arr1);
      console.log(arr);
  }
