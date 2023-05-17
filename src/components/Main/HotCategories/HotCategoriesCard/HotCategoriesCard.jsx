import cn from 'classnames'
import scss from './HotCategoriesCard.module.scss'
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';


function HotCategoriesCard({ icon, title, disc }) {
    const { t } = useTranslation()
    const isDark = useTheme();
    return (
        <div className={scss.card}>
            <div className={scss.card__img}>
                <img src={icon} alt="icon" />
            </div>
            <div className={scss.card__text}>
                <h1 className={cn({
                    dark_text: isDark
                })}>{t(title)}</h1>
                <p>{t(disc)}</p>
            </div>
        </div>
    );
}

export default HotCategoriesCard;