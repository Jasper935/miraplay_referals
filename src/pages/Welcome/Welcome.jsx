import css from './Welcome.module.css'
import { Header } from '../../components/Header/Header'

export const Welcome=()=>{


    return(
        <div className={css.container}>
            <Header/>
            <div className={css.imgWrap}>
                <h1 className={css.headTitle}> Зарабатывай на реферальной программе</h1>
            </div>
            
        </div>
    )

}