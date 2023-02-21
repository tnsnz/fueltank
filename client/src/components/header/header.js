import css from '../../css/header/Header.module.css'
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Header() {
    return (
        <div className={css.header}>
            <div className={css.header_left}>
                <h1>Fuel Project</h1>
            </div>
            <div className={css.header_right}>
                <Link to="/sign_up">
                    <Button className={css.basic_btn} type='button' name='signUp'>Sign up
                    </Button>
                </Link>
                <Link to="/sign_in">
                    <Button className={css.basic_btn} type='button' name='signIn'>Sign in
                    </Button>
                </Link>
            </div>
        </div>
    )

};