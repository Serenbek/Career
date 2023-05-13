import React, { useState } from 'react'
import scss from './BlogDeatails.module.scss'
import hus from '../../assets/blog/hus.png'
import antoi from '../../assets/blog/antoi.png'
import { useTranslation } from 'react-i18next'
import useTheme from '../../hooks/useTheme'
import cn  from 'classnames'
import { Link } from 'react-router-dom'

import img1 from '../../assets/blog/earth.png'
import img2 from '../../assets/blog/laptop.png'
import fb from '../../assets/blog/fb.png'
import ins from '../../assets/blog/ins.png'
import inn from '../../assets/blog/in.png'
import twit from '../../assets/blog/twit.png'
import social from '../../assets/blog/social.png'
import right from "../../assets/blog/right.png";

const BlogDetails = () => {
  const {t} = useTranslation()
  const isDark = useTheme()
  const [isLike, setIsLike] = useState(false)
  return (
    <div className={scss.wrapper}>
      <section className={scss.navbar}>
        <Link
          className={cn({
            dark_text: isDark,
          })}
          to="/">
          {t("blogDetail.home")}
        </Link>
        <img
          className={cn({
            dark_btn: isDark,
          })}
          src={right}
          alt="right"
        />
        <Link
          className={cn({
            dark_text: isDark,
          })}
          to="/CareerBLog">
          {t("blogDetail.blog")}
        </Link>
        <img
          className={cn({
            dark_btn: isDark,
          })}
          src={right}
          alt="right"
        />
        <span>{t("blogDetail.title")}</span>
        <div className={scss.line}></div>
      </section>
      <header
        className={cn(scss.head, {
          dark_text: isDark,
        })}>
        <h1
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.title")}
        </h1>

        <section className={scss.post_user}>
          <div className={scss.user_info}>
            <img src={hus} alt="" />
            <div>
              <h3
                className={cn({
                  dark_text: isDark,
                })}>
                Jane Cooper
              </h3>
              <span className={scss.subTitle}>
                24 {t("blog.postMay")} 2022
                <span className={scss.dot}>&#183;</span>18 {t("blog.minread")}
              </span>
            </div>
          </div>
          <div>
            <svg
              className={scss.user_like}
              onClick={()=> setIsLike(!isLike)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isDark ? isLike ? "red" : "white" : isLike ? "red" : "dark"}>
              <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isDark ? "white" : "dark"}>
              <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path>
            </svg>
          </div>
        </section>
      </header>
      <section className={scss.wrap_info}>
        <p
          className={cn({
            dark_text: isDark,
          })}>
          <span
            className={cn(scss.first_letter, {
              dark_text: isDark,
            })}>
            p
          </span>
          {t("blogDetail.text")}
        </p>
        <p
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.text1")}
        </p>
        <p
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.text1")}
        </p>
        <img src={img1} alt="earth" />
        <h4
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.title2")}
        </h4>
        <p
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.text2")}
        </p>
        <h4
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.title2")}
        </h4>
        <p
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.text")}
        </p>
        <p className={scss.text_tag}>
          <svg
            className={scss.tag_img}
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.48">
              <path
                d="M18 22.5H9.165C9.44378 20.6435 10.1067 18.8656 11.1114 17.2797C12.1161 15.6939 13.4405 14.3351 15 13.29L17.685 11.49L16.035 9L13.35 10.8C11.0899 12.3061 9.23656 14.3468 7.9544 16.7411C6.67223 19.1353 6.00091 21.8091 6 24.525V34.5C6 35.2957 6.31607 36.0587 6.87868 36.6213C7.44129 37.1839 8.20435 37.5 9 37.5H18C18.7956 37.5 19.5587 37.1839 20.1213 36.6213C20.6839 36.0587 21 35.2957 21 34.5V25.5C21 24.7044 20.6839 23.9413 20.1213 23.3787C19.5587 22.8161 18.7956 22.5 18 22.5Z"
                fill="#919EAB"
              />
              <path
                d="M39 22.5H30.165C30.4438 20.6435 31.1067 18.8656 32.1114 17.2797C33.1161 15.6939 34.4405 14.3351 36 13.29L38.685 11.49L37.05 9L34.35 10.8C32.0899 12.3061 30.2366 14.3468 28.9544 16.7411C27.6722 19.1353 27.0009 21.8091 27 24.525V34.5C27 35.2957 27.3161 36.0587 27.8787 36.6213C28.4413 37.1839 29.2043 37.5 30 37.5H39C39.7957 37.5 40.5587 37.1839 41.1213 36.6213C41.6839 36.0587 42 35.2957 42 34.5V25.5C42 24.7044 41.6839 23.9413 41.1213 23.3787C40.5587 22.8161 39.7957 22.5 39 22.5Z"
                fill="#919EAB"
              />
            </g>
          </svg>
          <h5
            className={cn({
              dark_text: isDark,
            })}>
            {t("blogDetail.text2")}
          </h5>
        </p>
        <img src={img2} alt="laptop" />
        <p
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.text1")}
        </p>
        <p
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.text1")}
        </p>
        <p
          className={cn({
            dark_text: isDark,
          })}>
          {t("blogDetail.text")}
        </p>
      </section>
      <footer>
        <div className={scss.tags}>
          <span
            className={cn({
              dark_text: isDark,
            })}>
            Share:
          </span>
          <button
            className={cn({
              card: isDark,
            })}>
            {t("blogul1")}
          </button>
          <button
            className={cn({
              card: isDark,
            })}>
            {t("blogul2")}
          </button>
          <button
            className={cn({
              card: isDark,
            })}>
            {t("blogul3")}
          </button>
          <button
            className={cn({
              card: isDark,
            })}>
            {t("blogul4")}
          </button>
        </div>
        <div className={scss.share}>
          <span
            className={cn({
              dark_text: isDark,
            })}>
            Tags:
          </span>
          <button
            className={cn({
              card: isDark,
            })}>
            <img src={fb} alt="FaceBook" /> FaceBook
          </button>
          <button
            className={cn(scss.ins, {
              card: isDark,
            })}>
            <img src={ins} alt="Instagram" /> Instagram
          </button>
          <button
            className={cn({
              card: isDark,
            })}>
            <img src={inn} alt="Linkedin" /> Linkedin
          </button>
          <button
            className={cn({
              card: isDark,
            })}>
            <img src={twit} alt="Twitter" /> Twitter
          </button>
        </div>
      </footer>
      <section className={scss.user_post}>
        <img className={scss.user_avatar} src={antoi} alt="antoi" />
        <div className={scss.post_content}>
          <section className={scss.content_header}>
            <div className={scss.header_left}>
              <h1
                className={cn({
                  dark_text: isDark,
                })}>
                Courtney Henry
              </h1>
              <p>{t("blogDetail.curs")}</p>
            </div>
            <div>
              <img src={social} alt="" />
            </div>
          </section>
          <div className={scss.content_dicription}>
            <p>{t("blogDetail.text1")}</p>
            <p>Member since Mar 15, 2021</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetails;