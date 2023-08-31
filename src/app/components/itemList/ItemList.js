import { Grid } from "@mui/material";
import './item.css'
import Link from "next/link";

export default function ItemList({list}) {
    return(
        <div>
            <Grid container>
                {list.map((item)=>(
                    // 상세페이지를 보기 위해서 각각의 itemn 에 Link를 걸자 
                    // 다이나믹 라우팅 :
                    <Link href="/view/[id]" as={'/view/'+item.id}>
                        <Grid item xs={3} key={item.id}>
                        <img className="img_item" src={item.image_link} alt={item.name}  />
                        <strong className="title_item">{item.name}</strong>
                        <span className="txt_info">{item.category}&nbsp;{item.product_type}</span>
                        <strong className="num_price">{item.price}</strong>
                        </Grid>
                    </Link>
                ))}
            </Grid>
        </div>
    );
}