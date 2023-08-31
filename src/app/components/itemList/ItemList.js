import { Grid } from "@mui/material";
import './itemList.css'
import Link from "next/link";

export default function ItemList({list}) {
    return(
        <div>
           <Grid container>
                {list.map((item)=>(
                    // 상세페이지를 보기 위해서 각각의 itemn 에 Link를 걸자 
                    // 다이나믹 라우팅 :
                    // xs가 전체 12일때 3*4 이므로 4개씩 배치 
                    <Grid item xs={3} key={item.id}>
                        <Link href={'/view/'+item.id}>
                            <img src={item.image_link} alt={item.name} className="img_item" />
                            <strong>{item.name}</strong>
                            <span className="txt_info">{item.category}&nbsp;{item.product_type}</span>
                            <strong className="num_price">${item.price}</strong>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}