"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import ItemList from "./components/itemList/ItemList";
import { Divider } from "@mui/material";

export default function Home() {
  // 상품을 저장하기 위해서 
  const [list, setList] = useState([]);

  const API_URL = "/api/v1/products.json?brand=maybelline";
  const getData = () => {
    axios.get(
      API_URL
    ).then(data =>{
      console.log(data);
      setList(data.data);
    })
  }
  // 렌더링 될때마다 실행
  // useEffect(() => {  });

  // 최초 한번만 실행할때 
  useEffect(() => {
    getData();
  },[]);

  return (
    // <>
    //   <h1 id="main">main 창</h1> 
    // </>
    
    // <div style={{width:"80%", margin:"auto", paddingTop:"20px"}}>
    //   <h2>베스트 상품</h2>
    //   <Divider /> {/* 구분선 */}
    //   <ItemList list={list} />
    // </div>
      
     // 만약에 상위 9개만 베스트 상품이고 
     // 신상품이라고 가정해보자.
     <>
      <div style={{width:"80%", margin:"auto", paddingTop:"20px"}}>
        <h2>베스트 상품</h2>
        <Divider /> {/* 구분선 */}
        <ItemList list={list.slice(0,9)} />
      </div>

      <div style={{width:"80%", margin:"auto", paddingTop:"20px"}}>
        <h2>신상품 상품</h2>
        <Divider /> {/* 구분선 */}
        <ItemList list={list.slice(9)} />
      </div>
    </>
  )
}
