import React from 'react'
import { useTranslation } from 'react-i18next'
import scss from './HomeMain.module.scss'
import mainImg from '../../../assets/about/homePage.png'
import main1 from '../../../assets/about/home1.png'
import main2 from '../../../assets/about/home2.png'
import main3 from '../../../assets/about/home3.png'
import main4 from '../../../assets/about/home4.png'
import main5 from '../../../assets/about/home5.png'
import main6 from '../../../assets/about/home6.png'
import brand1 from '../../../assets/mainImg/brand_lenovo.png'
import brand2 from '../../../assets/mainImg/brand_netflix.png'
import brand3 from '../../../assets/mainImg/brand_slack.png'
import brand4 from '../../../assets/mainImg/brand_spotify.png'
import search from "../../../assets/input_icon/search.png";
// import useTheme from '../../../hooks/useTheme'


const HomeMain = () => {
  const {t}= useTranslation()
  return (
    <section className={scss.wrapper}>
      <aside className={scss.wrap_deserve}>
        <h1>
          {t("home.title")} <span>{t("home.career")} </span>
          {t("home.title1")}
        </h1>
        <p>{t("about.agencyinfo")}</p>
        <main className={scss.main_inputs}>
          <div>
            <input type="text" placeholder={t("home.inp")} />
            <img src={search} alt="search" />
          </div>
          <div>
            <input type="text" placeholder={t("home.inp2")} />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 11.25C9.38194 11.25 8.77776 11.0667 8.26385 10.7233C7.74995 10.38 7.34941 9.8919 7.11288 9.32088C6.87636 8.74987 6.81448 8.12153 6.93505 7.51534C7.05563 6.90915 7.35326 6.35233 7.7903 5.91529C8.22734 5.47825 8.78416 5.18062 9.39035 5.06004C9.99654 4.93947 10.6249 5.00135 11.1959 5.23788C11.7669 5.4744 12.255 5.87494 12.5984 6.38884C12.9417 6.90275 13.125 7.50693 13.125 8.125C13.1241 8.95351 12.7945 9.74782 12.2087 10.3337C11.6228 10.9195 10.8285 11.2491 10 11.25ZM10 6.25C9.62917 6.25 9.26666 6.35997 8.95831 6.56599C8.64997 6.77202 8.40965 7.06486 8.26773 7.40747C8.12582 7.75008 8.08869 8.12708 8.16104 8.49079C8.23338 8.85451 8.41196 9.1886 8.67418 9.45082C8.93641 9.71305 9.2705 9.89162 9.63421 9.96397C9.99793 10.0363 10.3749 9.99919 10.7175 9.85727C11.0602 9.71536 11.353 9.47504 11.559 9.16669C11.765 8.85835 11.875 8.49584 11.875 8.125C11.8745 7.62789 11.6767 7.15129 11.3252 6.79978C10.9737 6.44826 10.4971 6.25055 10 6.25Z"
                fill="#212B36"
              />
              <path
                d="M10 18.75L4.72782 12.5321C4.69788 12.4964 4.51019 12.2499 4.51019 12.2499C3.60951 11.0636 3.1229 9.6145 3.12501 8.125C3.12501 6.30164 3.84934 4.55295 5.13865 3.26364C6.42796 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.5721 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.8772 9.61389 16.391 11.0624 15.4908 12.2483L15.4898 12.2499C15.4898 12.2499 15.3023 12.4964 15.2744 12.5295L10 18.75ZM5.50782 11.4969C5.50844 11.4973 5.65369 11.6895 5.68694 11.7309L10 16.8174L14.3188 11.7237C14.3462 11.6892 14.4927 11.4956 14.493 11.4951C15.2288 10.5258 15.6264 9.34195 15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4918 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02253 4.14752C4.96764 5.20242 4.37501 6.63316 4.37501 8.125C4.37362 9.34261 4.77156 10.5271 5.50782 11.4969Z"
                fill="#212B36"
              />
            </svg>
            <button>
              <img src={search} alt="" />
            </button>
          </div>
        </main>
        <main className={scss.main_inputs_mobile}>
          <div>
            <input type="text" placeholder={t("home.inp")} />
            <img src={search} alt="search" />
          </div>
          <div>
            <input type="text" placeholder={t("home.inp2")} />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 11.25C9.38194 11.25 8.77776 11.0667 8.26385 10.7233C7.74995 10.38 7.34941 9.8919 7.11288 9.32088C6.87636 8.74987 6.81448 8.12153 6.93505 7.51534C7.05563 6.90915 7.35326 6.35233 7.7903 5.91529C8.22734 5.47825 8.78416 5.18062 9.39035 5.06004C9.99654 4.93947 10.6249 5.00135 11.1959 5.23788C11.7669 5.4744 12.255 5.87494 12.5984 6.38884C12.9417 6.90275 13.125 7.50693 13.125 8.125C13.1241 8.95351 12.7945 9.74782 12.2087 10.3337C11.6228 10.9195 10.8285 11.2491 10 11.25ZM10 6.25C9.62917 6.25 9.26666 6.35997 8.95831 6.56599C8.64997 6.77202 8.40965 7.06486 8.26773 7.40747C8.12582 7.75008 8.08869 8.12708 8.16104 8.49079C8.23338 8.85451 8.41196 9.1886 8.67418 9.45082C8.93641 9.71305 9.2705 9.89162 9.63421 9.96397C9.99793 10.0363 10.3749 9.99919 10.7175 9.85727C11.0602 9.71536 11.353 9.47504 11.559 9.16669C11.765 8.85835 11.875 8.49584 11.875 8.125C11.8745 7.62789 11.6767 7.15129 11.3252 6.79978C10.9737 6.44826 10.4971 6.25055 10 6.25Z"
                fill="#212B36"
              />
              <path
                d="M10 18.75L4.72782 12.5321C4.69788 12.4964 4.51019 12.2499 4.51019 12.2499C3.60951 11.0636 3.1229 9.6145 3.12501 8.125C3.12501 6.30164 3.84934 4.55295 5.13865 3.26364C6.42796 1.97433 8.17664 1.25 10 1.25C11.8234 1.25 13.5721 1.97433 14.8614 3.26364C16.1507 4.55295 16.875 6.30164 16.875 8.125C16.8772 9.61389 16.391 11.0624 15.4908 12.2483L15.4898 12.2499C15.4898 12.2499 15.3023 12.4964 15.2744 12.5295L10 18.75ZM5.50782 11.4969C5.50844 11.4973 5.65369 11.6895 5.68694 11.7309L10 16.8174L14.3188 11.7237C14.3462 11.6892 14.4927 11.4956 14.493 11.4951C15.2288 10.5258 15.6264 9.34195 15.625 8.125C15.625 6.63316 15.0324 5.20242 13.9775 4.14752C12.9226 3.09263 11.4918 2.5 10 2.5C8.50816 2.5 7.07742 3.09263 6.02253 4.14752C4.96764 5.20242 4.37501 6.63316 4.37501 8.125C4.37362 9.34261 4.77156 10.5271 5.50782 11.4969Z"
                fill="#212B36"
              />
            </svg>
          </div>
            <button>
              <img src={search} alt="" />
            </button>
        </main>
        <main className={scss.main_brand}>
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
        </main>
        <main className={scss.main_result}>
          <div>
            <h2>2m+</h2>
            <p>{t("about.jobs")}</p>
          </div>
          <div>
            <h2>500k+</h2>
            <p>{t("about.succ")}</p>
          </div>
          <div>
            <h2>250+</h2>
            <p>{t("about.partners")}</p>
          </div>
          <div>
            <h2>1,56k+</h2>
            <p>{t("about.emplayee")}</p>
          </div>
        </main>
      </aside>
      <aside className={scss.wrap_img}>
        <img src={mainImg} alt="mainImg" />
        <div className={scss.animation}>
          <img className={scss.move1} src={main1} alt="job_animation" />
          <img className={scss.move3} src={main2} alt="job_animation" />
          <img className={scss.move2} src={main3} alt="job_animation" />
          <img className={scss.move4} src={main4} alt="job_animation" />
          <img className={scss.move5} src={main5} alt="job_animation" />
          <img className={scss.move6} src={main6} alt="job_animation" />
          <img className={scss.move7} src={main1} alt="job_animation" />
        </div>
      </aside>
    </section>
  );
}

export default HomeMain