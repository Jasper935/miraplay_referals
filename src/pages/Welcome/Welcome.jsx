import css from './Welcome.module.css'
import { Header } from '../../components/Header/Header'
import { useState } from 'react'

export const Welcome=()=>{
const [isModalOpen, setIsModalOpen]=useState(true)

const onClick=()=>{
    setIsModalOpen(isModalOpen)
}
    return(
        <div className={css.container}>
            <Header onClick={onClick}/>
            <div className={css.imgWrap}>

                <h1 className={isModalOpen?css.headTitle:css.headTitleDisabled}> Зарабатывай на реферальной программе</h1>
            </div>
            
        </div>
    )

}