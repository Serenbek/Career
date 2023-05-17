import React from 'react'
import css from './globalContent.module.scss'
import cn from 'classnames'
import useTheme from '../../../hooks/useTheme';

function GlobalContent({ img, job, title }) {
     const isDark = useTheme();
    return (
      <div className={css.card}>
        <div>
          <img src={img} alt={title} />
        </div>
        <div className={cn(css.card__bottom,{
            card: isDark
        })}>
          <h1 className={cn({
            dark_text: isDark
          })}>{title}</h1>
          <p>{job}</p>
        </div>
      </div>
    );
}

export default GlobalContent