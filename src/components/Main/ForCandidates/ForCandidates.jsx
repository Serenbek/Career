import React, { useTransition } from 'react';
import scss from './ForCandidates.module.scss'
import btn_img from '../../../assets/images/ForCandidates/btn_img.svg'
import ForCandidatesCard from './ForCandidatesCard/ForCanditades';
import { ForCandidatesConst } from '../../../constants/ForCandidatesConst'
import MyButton from '../../UI/Buttons/MyButton';
import { useTranslation } from 'react-i18next';

function ForCandidates(props) {
    const { t } = useTranslation()
    return (
            <div className={scss.candidates}>
                <div className={scss.top_content}>
                    <div className={scss.top_content__title}>
                        <p>{t("candidates.cand")}</p>
                        <h1>{t("candidates.exp")}</h1>
                    </div>
                    <p>{t("candidates.p")}</p>
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
                    <img src={btn_img} alt="img" />
                    {t("candidates.btn")}
                    </>
                </MyButton>
            </div>
    );
}

export default ForCandidates;