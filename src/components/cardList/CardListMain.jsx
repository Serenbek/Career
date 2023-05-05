import { cardListData } from '../../constants/cardListData'
import cn from 'classnames'
import { useState } from "react";
import ReactPaginate from "react-paginate";

import useTheme from "../../hooks/useTheme";

import favorite from '../../assets/listCard/favorite.png'
import local from '../../assets/listCard/local.png'
import level from '../../assets/listCard/exp.png'
import cash from '../../assets/listCard/cash.png'
import user from '../../assets/listCard/user.png'
import clock from '../../assets/listCard/clock.png'
import userlike from '../../assets/listCard/like.png'


import scss from './cardListMain.module.scss'
import { useEffect } from 'react';



const CardListMain = () => {

	const isDark = useTheme();
const [currentItems, setCurrentItems] = useState([]);
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
    <div>
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
                <img className={scss.header_like} src={favorite} alt="" />
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
