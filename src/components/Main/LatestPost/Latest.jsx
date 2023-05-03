import React from 'react';
import { PostConst } from '../../../constants/PostConst'
import PostCard from './PostCard/PostCard';
import scss from './Latest.module.scss'
import depression from '../../../assets/images/PostImg/depression.svg'
import orangeArrow from '../../../assets/images/PostImg/orangeArrow.svg'

function Latest(props) {
    return (
        <div className='container'>
            <div className={scss.wrapper}>
                <div className={scss.top}>
                    <div className={scss.top__text}>
                        <p className={scss.top__text_p}>BLOG</p>
                        <h1>Read Our Lates News</h1>
                        <p>Aenean vulputate eleifend tellus. Mauris turpis nunc,
                            blandit et, volutpat molestie, porta ut, ligula.</p>
                    </div>
                    <button>
                        View All
                        <img src={orangeArrow} alt="" />
                    </button>
                </div>
                <div className={scss.bottom}>
                    <a href="">
                        <div className={scss.post} >
                            <img src={depression} alt="" />
                            <div className={scss.post__text}>
                                <div className={scss.post__time}>
                                    <p>24 May 2019</p>
                                    <div></div>
                                    <p>8 mins</p>
                                </div>
                                <h1>Event On A Budget: 7 Tips <br />
                                    From The Great Depression</h1>
                                <p>Aenean viverra rhoncus pede. Phasellus blandit leo ut odio. <br />
                                    Pellentesque commodo eros a enim. Phasellus <br />
                                    consectetuer vestibulum elit.</p>
                            </div>
                        </div>
                    </a>
                    <div className={scss.posts}>
                        {
                            PostConst.map((item, index) => (
                                <PostCard key={`${item.image}_${index}`} {...item} />
                            ))
                        }
                    </div>
                </div>
                <button className={scss.btnO}>
                    View All
                    <img src={orangeArrow} alt="" />
                </button>

            </div>
        </div>
    );
}

export default Latest;