import css from '../../css/home/Home.module.css'
import Category from "./category/category";
import Board from "./board/board";

export default function Home() {

    return (
        <div className={css.home}>
            <div className={css.category_container}>
                <Category/>
            </div>
            <div className={css.board_container}>
                <Board/>
            </div>
        </div>
    )
}