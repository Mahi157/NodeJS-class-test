import http from "http";
import fs from  'fs/promises'

const server = http.createServer((req, res) => {
  res.writeHead(200, "Content-Type: type/html");
  res.write("<h1> Welcome to the new Server </h1>");
  
  if(req.url=== "/students"){
    res.write("here students details will be recieved");
  }

  
  res.end(
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <form> 
        <label> Student Name: </label>
        <input type="text" id="name" placeholder="Enter your name"> <br><br> 
        <label> Roll NO.: </label> 
        <input type="number" id="roll" placeholder="Enter your roll no."> <br><br> 
        <label> Course Name: </label> 
        <input type="text" id="course" placeholder="Enter your course"> <br><br> 
        <label> Email: </label> 
        <input type="text" id="email" placeholder="Enter your email"> 
        <button type="submit" > submit </button> 
    </form>

</body>
</html>`,
  );

  
});




// fs.writeFile("student.json", , (msg)=>{
//     if(msg){
//         console.log(msg);
//         return;
//     }

//     cout<< "name added to student.json file";
//   })

server.listen(3000, (msg) => {
  console.log("server is listening at 3000...");
});
