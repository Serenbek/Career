import cn from "classnames";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import useTheme from "../../../hooks/useTheme";

import favorite from "../../../assets/listCard/favorite.png";
import local from "../../../assets/listCard/local.png";
import level from "../../../assets/listCard/exp.png";
import cash from "../../../assets/listCard/cash.png";
import user from "../../../assets/listCard/user.png";
import clock from "../../../assets/listCard/clock.png";
import userlike from "../../../assets/listCard/like.png";
import { addToCart } from "../../../redux/slices/CartSlice";

import scss from "./CardListMain.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CardListMain = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reducer.cartItems);
  const [users, setUsers] = useState([])
  useEffect( () => {
     fetch(
      "https://6463d7be127ad0b8f892c3cd.mockapi.io/job",
    ).then((response) => response.json())
.then((data) =>{
  setUsers(data);
  console.log(users)
})
  }, []);


console.log(users);
  const { t } = useTranslation();
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);
  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav.id !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const cartValue = cart.length;
  const isDark = useTheme();
  const [currentItems, setCurrentItems] = useState(cart);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;

    setItemOffset(newOffset);
  };
  return (
    <div>
      <Link to="/CareerCart" className={scss.cart_icon}>
        <p className={scss.cart_val}>{cartValue}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill={isDark ? "white" : "black"}
        >
          <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
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
                <img src={clock} alt="" /> {t("cart.part")}
                <br />
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
};

export default CardListMain;
