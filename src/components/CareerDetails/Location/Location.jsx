import React from 'react';
import scss from './Location.module.scss'
import { useTranslation } from 'react-i18next';
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";


function Location(props) {
    const { t } = useTranslation()

    return (
        <div className={scss.wrap} style={{width : "100%"}}>
            <h1>{t("location.loc")}</h1>
            <YMaps>
                <div className={scss.map} style={{width : "100%"}}>
                    <Map
                        width={700}
                        height={500}
                        defaultState={{
                            center: [42.843580, 74.595185],
                            zoom: 9
                        }}
                        
                    >
                        <Placemark geometry={[42.843580, 74.595185]}/>
                    </Map>
                </div>
            </YMaps>
            {/* <img src={map} alt="img" /> */}
        </div>
    );
}

export default Location;