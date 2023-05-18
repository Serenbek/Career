import scss from "./CardInput.module.scss";
import searchImg from "../../../assets/input_icon/search.png";
import { useTranslation } from "react-i18next";
import { setSearch } from "../../../redux/slices/SearchSLice";
import filter from "../../../assets/input_icon/filter.png";
import { useDispatch, useSelector } from "react-redux";

const CardInputs = () => {
  const { t } = useTranslation();
 const dispatch = useDispatch();
 const search = useSelector((state) => state.search.value);
  return (
    <div className={scss.filter}>
      <section className={scss.input}>
        <div className={scss.inp_job}>
          <input
            type="text"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            placeholder={t("cardInput.job")}
          />
        </div>

        <div className={scss.inp_cat}>
          <input type="text" placeholder={t("cardInput.cat")} />
        </div>
        <div className={scss.inp_log}>
          <input type="text" placeholder={t("cardInput.log")} />
        </div>
        <button>
          <img src={searchImg} alt="search" />
        </button>
      </section>
      <section className={scss.drop_content}>
        <button className={scss.dropdown}>
          {t("cardInput.type")}
          <ul className={scss.dropdown_menu}>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </button>

        <button className={scss.dropdown}>
          {t("cardInput.lvl")}
          <ul className={scss.dropdown_menu}>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </button>

        <button className={scss.dropdown}>
          {t("cardInput.salary")}
          <ul className={scss.dropdown_menu}>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </button>

        <button className={scss.dropdown1}>
          {t("cardInput.benef")}
          <ul className={scss.dropdown_menu}>
            <li>
              <a href="#">Item 1</a>
            </li>
            <li>
              <a href="#">Item 2</a>
            </li>
            <li>
              <a href="#">Item 3</a>
            </li>
          </ul>
        </button>
      </section>
      <section className={scss.filter_btn}>
        <button>
          <img src={filter} alt="" /> {t("cardInput.filter")}
        </button>
      </section>
    </div>
  );
};

export default CardInputs;
