import css from '../../css/header/Header.module.css'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className={css.header}>
            <div className={css.header_left}>
                <h1>Fuel Project</h1>
            </div>
            <div className={css.header_right}>
                <button className={css.basic_btn} type='button' name='signUp' onClick={() => {
                }}>Sign up
                </button>
                <button className={css.basic_btn} type='button' name='signIn' onClick={() => {
                }}>Sign in
                </button>
            </div>
        </div>
    )
};