import { useTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";
import scss from "./CareerBlog.module.scss";
import cn from "classnames";
import side2 from "../../assets/blog/side1.png";
import side3 from "../../assets/blog/side2.png";
import side4 from "../../assets/blog/side3.png";
import side1 from "../../assets/blog/side4.png";
import { BlogData, BlogData1 } from "../../constants/BLogData";
import { useState } from "react";

const Blog = () => {
  const [moreCard, setMoreCard] = useState(5);
  const ReadMore = () => { 
    setMoreCard(moreCard + moreCard)
   }
   const slice = BlogData.slice(0, moreCard)
   const slice1 = BlogData1.slice(0, moreCard)
  const isDark = useTheme();
  const { t } = useTranslation();
  return (
    <>
      <div className={scss.main}>
        <main className={scss.blog_slider}>
          {slice1.map((item) => (
            <div
              className={cn(item.img ? scss.card : scss.cardStyle, {
                card: isDark,
              })}
              key={item.id}
            >
              {item.img ? (
                <img className={scss.card_img} src={item.img} alt="" />
              ) : (
                ""
              )}
              <div>
                <span className={scss.subTitle}>
                  24 {t("blog.postMay")} 2022
                  <span className={scss.dot}>&#183;</span>8 {t("blog.minread")}
                </span>
                <h2
                  className={cn(scss.comment, {
                    dark_text: isDark,
                  })}
                >
                  {t(item.title)}
                </h2>
                <p>{t(item.post)}</p>
              </div>
              <div className={scss.proff}>
                <img src={item.avatar} alt={item.title} />
                <b
                  className={cn({
                    dark_text: isDark,
                  })}
                >
                  {item.name}
                </b>
              </div>
            </div>
          ))}
          <div className={scss.card_btn_mobile}>
            <button
              className={cn(scss.read_more, {
                card: isDark,
                dark_text: isDark,
              })}
              onClick={() => ReadMore()}
            >
              <svg
                className={scss.load}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isDark ? "white" : "black"}
              >
                <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path>
              </svg>
              {t("blog.read")}
            </button>
          </div>
        </main>
        <main className={scss.blog_slider1}>
          {slice.map((item) => (
            <div
              className={cn(item.img ? scss.card : scss.cardStyle, {
                card: isDark,
              })}
              key={item.id}
            >
              {item.img ? (
                <img className={scss.card_img} src={item.img} alt="" />
              ) : (
                ""
              )}
              <div>
                <span className={scss.subTitle}>
                  24 {t("blog.postMay")} 2022
                  <span className={scss.dot}>&#183;</span>8 {t("blog.minread")}
                </span>
                <h2
                  className={cn(scss.comment, {
                    dark_text: isDark,
                  })}
                >
                  {t(item.title)}
                </h2>
                <p>{t(item.post)}</p>
              </div>
              <div className={scss.proff}>
                <img src={item.avatar} alt={item.title} />
                <b
                  className={cn({
                    dark_text: isDark,
                  })}
                >
                  {item.name}
                </b>
              </div>
            </div>
          ))}
        </main>

        <aside className={scss.side_bar}>
          <div className={scss.side_head}>
            <input
              className={cn(scss.inp, {
                dark_inp: isDark,
              })}
              type="text"
              placeholder="search..."
            />

            <h2
              className={cn({
                dark_text: isDark,
              })}
            >
              {t("TBSTch4")}
            </h2>
            <ul
              className={cn({
                dark_text: isDark,
              })}
            >
              <li>{t("TBSTcli1")}</li>
              <li>{t("TBSTcli2")}</li>
              <li>{t("TBSTcli3")}</li>
              <li>{t("TBSTcli4")}</li>
              <li>{t("TBSTcli5")}</li>
            </ul>
          </div>

          <div className={scss.side_recent}>
            <h2
              className={cn({
                dark_text: isDark,
              })}
            >
              {t("blog.recen")}
            </h2>
            <div className={scss.side_card}>
              <img src={side1} alt="" />
              <div className={scss.card_post}>
                <p
                  className={cn(scss.card_title, {
                    dark_text: isDark,
                  })}
                >
                  {t("blog1")}
                </p>
                <p className={scss.subTitle}>
                  {t("blog.postMay")} 7,2017{" "}
                  <span className={scss.dot}>&#183;</span> 8 {t("blog.minread")}
                </p>
              </div>
            </div>
            <div className={scss.side_card}>
              <img src={side2} alt="" />
              <div className={scss.card_post}>
                <p
                  className={cn(scss.card_title, {
                    dark_text: isDark,
                  })}
                >
                  {t("blog2")}
                </p>
                <p className={scss.subTitle}>
                  {t("blog.postMay")} 7,2017{" "}
                  <span className={scss.dot}>&#183;</span> 8 {t("blog.minread")}
                </p>
              </div>
            </div>
            <div className={scss.side_card}>
              <img src={side3} alt="" />
              <div className={scss.card_post}>
                <p
                  className={cn(scss.card_title, {
                    dark_text: isDark,
                  })}
                >
                  {t("blog3")}
                </p>
                <p className={scss.subTitle}>
                  {t("blog.postMay")} 17,2020{" "}
                  <span className={scss.dot}>&#183;</span> 8 {t("blog.minread")}
                </p>
              </div>
            </div>
            <div className={scss.side_card}>
              <img src={side4} alt="" />
              <div className={scss.card_post}>
                <p
                  className={cn(scss.card_title, {
                    dark_text: isDark,
                  })}
                >
                  {t("blog4")}
                </p>
                <p className={scss.subTitle}>
                  {t("blog.postMay")} 10,2018{" "}
                  <span className={scss.dot}>&#183;</span> 8 {t("blog.minread")}
                </p>
              </div>
            </div>
          </div>
          <div className={scss.side_tags}>
            <h2
              className={cn({
                dark_text: isDark,
              })}
            >
              {t("blog.tags")}
            </h2>
            <div className={scss.tag_btn}>
              <button>{t("blogul1")}</button>
              <button>{t("blogul2")}</button>
              <button>{t("blogul3")}</button>
              <button>{t("blogul4")}</button>
              <button>{t("blogul5")}</button>
              <button>{t("blogul6")}</button>
              <button>{t("blogul7")}</button>
              <button>{t("blogul8")}</button>
              <button>{t("blogul8")}</button>
            </div>
            <div className={scss.side_info}>
              <h3>{t("adv")}</h3>
              <p>{t("quotes")}</p>
              <button>{t("gonow")}</button>
            </div>
          </div>
        </aside>
        <div className={scss.card_btn}>
          <button
            className={cn(scss.read_more, {
              card: isDark,
              dark_text: isDark,
            })}
            onClick={() => ReadMore()}
          >
            <svg
              className={scss.load}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isDark ? "white" : "black"}
            >
              <path d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"></path>
            </svg>
            {t("blog.read")}
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
