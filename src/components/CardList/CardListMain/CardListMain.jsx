import { cardListData } from '../../../constants/cardListData'
import cn from 'classnames'
import { useState } from "react";
import ReactPaginate from "react-paginate";
import useTheme from "../../../hooks/useTheme";

import favorite from '../../../assets/listCard/favorite.png'
import local from '../../../assets/listCard/local.png'
import level from '../../../assets/listCard/exp.png'
import cash from '../../../assets/listCard/cash.png'
import user from '../../../assets/listCard/user.png'
import clock from '../../../assets/listCard/clock.png'
import userlike from '../../../assets/listCard/like.png'
import { addToCart } from "../../../redux/slices/CartSlice";

import scss from './CardListMain.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



const CardListMain = () => {
 const dispatch = useDispatch();
 const cart = useSelector((state) => state.reducer.cartItems);
console.log(cart.map(i=> console.log(i.id)))
console.log(addToCart.id);
console.log(cart.title)


const {t} = useTranslation()
 const [favorites, setFavorites] = useState([]);
console.log(favorites);
 const handleFavorite = (id) => {
   if (favorites.includes(id)) {
     setFavorites(favorites.filter((fav) => fav.id !== id));
   } else {
     setFavorites([...favorites, id]);
   }
 };

const cartValue =cart.length
	const isDark = useTheme();
const [currentItems, setCurrentItems] = useState(cart);
const [pageCount, setPageCount] = useState(0);
const [itemOffset, setItemOffset] = useState(0);
const itemsPerPage = 12;

useEffect(() => {
  
  const endOffset = itemOffset + itemsPerPage;
  setCurrentItems(cardListData.slice(itemOffset, endOffset));
  setPageCount(Math.ceil(cardListData.length / itemsPerPage));
}, [itemOffset, itemsPerPage]);
const handlePageClick = (event) => {
  const newOffset = (event.selected * itemsPerPage) % cardListData.length;

  setItemOffset(newOffset);
};
  return (
    <div >
      <Link to='/CareerCart' className={scss.cart_icon}>
<p className={scss.cart_val}>{cartValue}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
    fill='black'
>
          <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="17.5" cy="19.5" r="1.5"></circle>
        </svg>
      </Link>
      <div className={scss.wrapper}>
        {currentItems.map((card) => (
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
                  onClick={() => {
                    dispatch(addToCart(card));
                    handleFavorite(card.id);
                  }}
                  src={favorites.id === card.id ? userlike : favorite}
                  alt={card.title}
                />
              </button>
            </header>
            <section className={scss.card_body}>
              <h3
                className={cn({
                  dark_text: isDark,
                })}
              >
                {t(card.title)}
              </h3>
              <h4>{card.comp}</h4>
              <h5>
                <img src={local} alt={card.title} />
                New York
              </h5>
              <p>{t("cart.post")}</p>
            </section>
            <footer className={scss.card_foot}>
              <div className="foot_left">
                <img src={level} alt="" /> {t("cart.exp")} <br />
                <img src={cash} alt="" /> $1,250 - $3000
              </div>
              <div className="foot_right">
                <img src={clock} alt="" /> {t("cart.part")}<br />
                <img src={user} alt="" /> Freelance
              </div>
            </footer>
          </div>
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        containerClassName={scss.pagination}
        pageLinkClassName={scss.page_num}
        previousLinkClassName={scss.page_num}
        nextLinkClassName={scss.page_num}
        activeClassName={scss.active}
      />
    </div>
  );
}

export default CardListMain
