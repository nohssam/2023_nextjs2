"use client"
import { useEffect } from "react"
import axios from "axios"
export default function Home() {
  const API_URL = "/api/v1/products.json?brand=maybelline";
  const getData = () => {
    axios.get(
      API_URL
    ).then(data =>{
       console.log(data);
    })
  }
  // 렌더링 될때마다 실행
  // useEffect(() => {  });

  // 최초 한번만 실행할때 
  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <h1 id="main">main 창</h1>
    </>
  )
}
