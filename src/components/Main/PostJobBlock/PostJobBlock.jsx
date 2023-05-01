import React from 'react'
import css from './PostJobBlock.module.scss'
import mainImg from '../../../assets/images/recruitImgs/recruitMainImg.svg'
import file from "../../../assets/images/recruitImgs/fileImg.svg";
import Header from '../../Header/Header';


function PostJobBlock() {
    return (
        <div className={css.background}>
            <div className='container'>
                <Header/>
                <div className={css.wrapper}>
                    <div className={css.left}>
                        <p className={css.info}>FOR RECRUITERS</p>
                        <h1 className={css.title}>Do You Have A Position To Post Job? </h1>
                        <p className={css.extra__info}>Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper velit.</p>
                        <button className={css.btn}>
                            <img src={file} alt="" />
                            <p>Post a Job</p>
                        </button>
                    </div>
                    <img className={css.main__img } src={mainImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default PostJobBlock