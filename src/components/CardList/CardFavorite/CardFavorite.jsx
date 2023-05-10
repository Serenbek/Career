import React from 'react'
import scss from './CardFavorite.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import useTheme from '../../../hooks/useTheme';
import cn from 'classnames'
import { addToCart } from "../../../redux/slices/CartSlice";


import favorite from "../../../assets/listCard/favorite.png";
import local from "../../../assets/listCard/local.png";
import level from "../../../assets/listCard/exp.png";
import cash from "../../../assets/listCard/cash.png";
import user from "../../../assets/listCard/user.png";
import clock from "../../../assets/listCard/clock.png";


const CardFavorite = () => {
	const cart = useSelector((state) => state.reducer.cartItems);
	const isDark = useTheme();
	const dispatch = useDispatch()
  return (
	<div>
	  <div className={scss.wrapper}>
        {cart.map((card) => (
          <div
            key={card.id}
            className={cn(scss.card, {
              card: isDark,
            })}
          >
            <header className={scss.card_header}>
              <img src={card.img} alt="" />
              <button>
                <img
                  className={scss.header_like}
                  onClick={() => dispatch(addToCart(card))}
                  src={favorite}
                  alt=""
                />
              </button>
            </header>
            <section className={scss.card_body}>
              <h3
                className={cn({
                  dark_text: isDark,
                })}
              >
                {card.title}
              </h3>
              <h4>{card.comp}</h4>
              <h5>
                <img src={local} alt={card.title} />
                New York
              </h5>
              <p>Posted day: October 28, 2019</p>
            </section>
            <footer className={scss.card_foot}>
              <div className="foot_left">
                <img src={level} alt="" /> 3 year exp <br />
                <img src={cash} alt="" /> $1,250 - $3000
              </div>
              <div className="foot_right">
                <img src={clock} alt="" /> Part time <br />
                <img src={user} alt="" /> Freelance
              </div>
            </footer>
          </div>
        ))}
		</div>
	</div>
  )
}

export default CardFavorite
