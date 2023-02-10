// import express from "express";
import * as express from "express";
import axios from "axios";
const app= express();
const port:number = 3000;
import { Request, Response } from "express"

app.get("/",async(req:Request, res:Response) => {


interface User {
    id: number,
    email:string ,
    first_name:string,
    last_name: string,
    avatar: string
  }

  interface Useradd {
    id: number,
    email:string ,
    first_name:string,
    last_name: string,
    avatar: string,
    phone:string
  }

  interface Support {
    url: string;
    text: string;
  }

  interface ResponseData {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: Support;
  }

  interface addData {
      id:number,
      phone:string
  }


  const additionalData=[
      {
        "id":1,
        "phone":"2703451"
      },
      {
        "id":2,
        "phone":"2703452"
      },
      {
        "id":3,
        "phone":"2703453"
      },
      {
        "id":4,
        // "phone":"2703454"
      }
      
    ]
    

    var apiResponse= await axios.get<ResponseData>("https://reqres.in/api/users?page=1")
    const data:ResponseData=apiResponse.data;

    var result:Useradd[]=[];
    data.data.map((i:User)=>{
      additionalData.map((j:addData)=>{
        if(i.id==j.id)
        {
          result.push({...i,...j});
      
        }
      })
    })
    
    
    res.send(result);
});


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});


