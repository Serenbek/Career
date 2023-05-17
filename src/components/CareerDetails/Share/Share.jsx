import React from 'react';
import scss from './Share.module.scss'
import facebook from '../../../assets/images/Benefits/face.svg'
import inst from '../../../assets/images/Benefits/inst.svg'
import inn from '../../../assets/images/Benefits/in.svg'
import twitter from '../../../assets/images/Benefits/twitter.svg'
import { useTranslation } from 'react-i18next';



function Share(props) {
    const { t } = useTranslation()
    return (
        <div className={scss.wrap}>
            {t("share.sh")}
            <div>
                <div>
                <button className={scss.facebook}><img src={facebook} alt="icon" />Facebook</button>
                <button className={scss.inst}><img src={inst} alt="icon" />Instagram</button>
                </div>
                <div>
                <button className={scss.in}><img src={inn} alt="icon" />LinkedIn</button>
                <button className={scss.twitter}><img src={twitter} alt="icon" />Twitter</button>
                </div>
            </div>
        </div>
    );
}

export default Share;