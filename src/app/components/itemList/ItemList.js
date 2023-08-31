import { Grid } from "@mui/material";
import './item.css'
export default function ItemList({list}) {
    return(
        <div>
            <Grid container>
                {list.map((item)=>(
                    <Grid item xs={3} key={item.id}>
                      <img className="img_item" src={item.image_link} alt={item.name}  />
                      <strong className="title_item">{item.name}</strong>
                      <span className="txt_info">{item.category}&nbsp;{item.product_type}</span>
                      <strong className="num_price">{item.price}</strong>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}