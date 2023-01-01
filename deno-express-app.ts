import express from "npm:express@4.18.2";

const app: express = express();

app.get("/", (req: any, res: any) => {
  res.send("Welcome to the Deno API!");
});

app.get('*', (req: any, res: any) => {
    const path = req.path.split('/');
    console.log(path);
    if (path.length > 2){
      res.send(`Hello,${path.join(' ')}!`); 
    } else {
      console.log("Path is " + path[1])
      if (path[1] == ''){
        res.send(`Hello, World!`);  
      } else {
        res.send(`Hello, ${path[1]}!`);
      }
    }
  })

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}` )
});