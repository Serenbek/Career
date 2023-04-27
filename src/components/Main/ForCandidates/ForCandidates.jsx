import React from 'react';
import scss from './ForCandidates.module.scss'
import btn_img from '../../../assets/images/ForCandidates/btn_img.svg'
import ForCandidatesCard from './ForCandidatesCard/ForCandidatesCard';
import { ForCandidatesConst } from '../../../constants/ForCandidatesConst'

function ForCandidates(props) {
    return (
        <div className='container'>
            <div className={scss.candidates}>
                <div className={scss.header}>
                    <div className={scss.header__title}>
                        <p>For Candidates</p>
                        <h1>Explore Thousands of Jobs</h1>
                    </div>
                    <p>Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Morbi mattis ullamcorper velit.</p>
                </div>
                <div className={scss.footer}>
                    {
                        ForCandidatesConst.map((item, index) => (
                            <ForCandidatesCard key={`${item.image}_${index}`} {...item} />
                        ))
                    }
                </div>
                <button>
                    <img src={btn_img} alt="image" />
                    Upload Your CV
                </button>
            </div>
        </div>
    );
}

export default ForCandidates;