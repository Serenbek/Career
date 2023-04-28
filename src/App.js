import './App.css';
import { Helmet } from 'react-helmet';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return (
      <Provider store={store}>
    <div className="App">
      <Helmet>
        <title>Career</title>
          <link rel="canon" href={logo} />

      </Helmet>
        <svg width="70" height="30" viewBox="0 0 74 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="68.1421" cy="14.1667" rx="4.10497" ry="4.16666" fill="#FA541C" />
          <path d="M48.7116 18.3337H44.6877L37.9577 8.05351V18.3337H33.9338V1.66699H37.9577L44.6877 11.9946V1.66699H48.7116V18.3337Z" fill="#212B36" />
          <path d="M54.8187 4.9196V8.29092H60.2054V11.4248H54.8187V15.081H60.7527V18.3337H50.9009V1.66699H60.7527V4.9196H54.8187Z" fill="#212B36" />
          <path d="M23.5574 18.3337C22.0523 18.3337 20.6687 17.9782 19.4069 17.2674C18.1602 16.5565 17.1643 15.5675 16.4194 14.3003C15.6896 13.0176 15.3247 11.5805 15.3247 9.98874C15.3247 8.39702 15.6896 6.96756 16.4194 5.70037C17.1643 4.43318 18.1602 3.44415 19.4069 2.73329C20.6687 2.02242 22.0523 1.66699 23.5574 1.66699C25.0626 1.66699 26.4385 2.02242 27.6852 2.73329C28.947 3.44415 29.9353 4.43318 30.6498 5.70037C31.3796 6.96756 31.7445 8.39702 31.7445 9.98874C31.7445 11.5805 31.3796 13.0176 30.6498 14.3003C29.9201 15.5675 28.9318 16.5565 27.6852 17.2674C26.4385 17.9782 25.0626 18.3337 23.5574 18.3337ZM23.5574 14.7175C24.8345 14.7175 25.8531 14.2848 26.6133 13.4194C27.3887 12.554 27.7764 11.4105 27.7764 9.98874C27.7764 8.55155 27.3887 7.40799 26.6133 6.55804C25.8531 5.69264 24.8345 5.25994 23.5574 5.25994C22.2651 5.25994 21.2313 5.68492 20.4559 6.53486C19.6957 7.38481 19.3156 8.5361 19.3156 9.98874C19.3156 11.4259 19.6957 12.5772 20.4559 13.4426C21.2313 14.2926 22.2651 14.7175 23.5574 14.7175Z" fill="#212B36" />
          <path d="M6.13717 15.0098H13.1354V18.3337H1.6416V15.2472L8.59351 4.99083H1.6416V1.66699H13.1354V4.75341L6.13717 15.0098Z" fill="#212B36" />
        </svg>

      <img src="./logo.svg" alt="" />
      <p>{t("title")}</p>
    </div>
    </Provider>
  );
}

export default App;
