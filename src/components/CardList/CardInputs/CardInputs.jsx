import scss from "./CardInput.module.scss";
import search from "../../../assets/input_icon/search.png";
import { useTranslation } from "react-i18next";

import filter from "../../../assets/input_icon/filter.png";

const CardInputs = () => {
  const { t } = useTranslation();

  return (
    <div className={scss.filter}>
      <section className={scss.input}>
        <div className={scss.inp_job}>
          <input type="text" placeholder={t("cardInput.job")} />
        </div>

        <div className={scss.inp_cat}>
          <input type="text" placeholder={t("cardInput.cat")} />
        </div>
        <div className={scss.inp_log}>
          <input type="text" placeholder={t("cardInput.log")} />
        </div>
        <button>
          <img src={search} alt="search" />
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
