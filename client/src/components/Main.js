import css from '../css/Main.module.css'
import Header from "./header/header"
import Home from "./home/home"


export default function Main() {
    return (
        <div>
            <div className={css.container_shadow}>
                <div className={css.container}>
                    <Header/>
                    <Home/>
                </div>
            </div>
        </div>
    )
};