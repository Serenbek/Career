import React from 'react';
import scss from './ForCandidates.module.scss'
import btn_img from '../../../assets/images/ForCandidates/btn_img.svg'
import ForCandidatesCard from './ForCandidatesCard/ForCanditades';
import { ForCandidatesConst } from '../../../constants/ForCandidatesConst'
import MyButtonWide from '../../UI/Buttons/MyButtonWide';
import MyButton from '../../UI/Buttons/MyButton';

function ForCandidates(props) {
    return (
        <div className='container'>
            <div className={scss.candidates}>
                <div className={scss.top_content}>
                    <div className={scss.top_content__title}>
                        <p>For Candidates</p>
                        <h1>Explore Thousands of Jobs</h1>
                    </div>
                    <p>Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper velit.</p>
                </div>
                <div className={scss.bottom_content}>
                    {
                        ForCandidatesConst.map((item, index) => (
                            <ForCandidatesCard key={`${item.image}_${index}`} {...item} />
                        ))
                    }
                </div>
                <MyButton>
                    <>
                    <img src={btn_img} alt="image" />
                    Upload Your CV
                    </>
                </MyButton>
            </div>
        </div>
    );
}

export default ForCandidates;