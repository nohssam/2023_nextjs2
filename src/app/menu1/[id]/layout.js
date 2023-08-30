import Manu1 from '@/app/components/menu/Manu1'
import Manu2 from '@/app/components/menu/Manu2'
import Manu3 from '@/app/components/menu/Manu3'
import './menu1.css'
// Layout은 반드시 인자(props)를 받아야 한다.
export default function Layout(props) {
    return(
        <>
            {props.params.id === '1' ? <Manu1 /> : props.params.id === '2'? <Manu2 /> : <Manu3 />}
        </>
    )
}