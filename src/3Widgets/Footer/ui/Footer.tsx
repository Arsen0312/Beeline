import React from 'react';
import cls from "./Footer.module.scss"
import { business, support, company, toPrivateIndividuals } from "../config"
import {Link} from "react-router-dom";
import Instagram from "./svgIcons/socialNetworks /Instagram";
import TikTok from "./svgIcons/socialNetworks /TikTok";
import YouTube from "./svgIcons/socialNetworks /YouTube";
import WhatsApp from "./svgIcons/socialNetworks /WhatsApp";
import Facebook from "./svgIcons/socialNetworks /Facebook";
import Wk from "./svgIcons/socialNetworks /Wk";
import EmailIcons from "./svgIcons/otherIcons/emailIcons";
import TelefonIcons from "./svgIcons/otherIcons/telefonIcons";
import BeelineSvgLogoWithNameIcons from "../../../6Shared/svg/BeelineSvgLogoWithNameIcons/BeelineSvgLogoWithNameIcons";
import PlayMarketIcons from "./svgIcons/otherIcons/playMarketIcons";
import SafariIcons from "./svgIcons/otherIcons/safariIcons";


const Footer = () => {
    return (
        <footer className={cls.main}>
            <nav className={cls.nav}>
                <section className={cls.block1}>
                    <div className={cls.sec1}>
                        <h3 className={cls.title}>Частным лицам</h3>
                        <ul>{toPrivateIndividuals.map((value) => (<li><Link to={value[1]}>{value[0]}</Link></li>))}</ul>
                    </div>
                    <div className={cls.sec2}>
                        <h3 className={cls.title}>Бизнес</h3>
                        <ul>{business.map((value) => (<li><Link to={value[1]}>{value[0]}</Link></li>))}</ul>
                    </div>
                    <div className={cls.sec3}>
                        <h3 className={cls.title}>Компания</h3>
                        <ul>{company.map((value) => (<li><Link to={value[1]}>{value[0]}</Link></li>))}</ul>
                    </div>
                    <div className={cls.sec4}>
                        <h3 className={cls.title}>Поддержка</h3>
                        <ul>{support.map((value) => (<li><Link to={value[1]}>{value[0]}</Link></li>))}</ul>
                    </div>
                </section>
                <section className={cls.block2}>
                    <div className={cls.boxForSocialMediaIcons}>
                        <Link to={"https://www.instagram.com/beeline_kyrgyzstan/?hl=ru"}>
                            <Instagram className={cls.icons}/>
                        </Link>
                        <Link to={"https://vm.tiktok.com/ZSJD2aSBd/"}>
                            <TikTok className={cls.icons}/>
                        </Link>
                        <Link to={"https://www.youtube.com/channel/UCFfbciGMeZbl6rL69VOC2gQ"}>
                            <YouTube className={cls.icons}/>
                        </Link>
                        <Link to={"https://vk.com/beelinekg"}>
                            <Wk className={cls.icons}/>
                        </Link>
                        <Link to={"https://clc.to/site_WhatsApp"}>
                            <WhatsApp className={cls.icons}/>
                        </Link>
                        <Link to={"https://web.facebook.com/beeline.kg/?fref=ts"}>
                            <Facebook className={cls.icons}/>
                        </Link>
                    </div>
                    <div className={cls.boxForContactDetails}>
                        <Link to={"mailto:answer@beeline.kg"}>
                            <div className={cls.emailContactDetails}>
                                <EmailIcons className={cls.emailIcons}/>
                                <span>answer@beeline.kg</span>
                            </div>
                        </Link>
                        <Link to={"tel:*611 справочная"}>
                            <div className={cls.telePhoneContactDetails}>
                                <TelefonIcons className={cls.telePhoneIcons}/>
                                <span>*611 справочная</span>
                            </div>
                        </Link>
                        <Link to={"tel:*611 справочная"}>
                            <div className={cls.forOthersOperators}>
                                <div>Для операторов других сетей</div>
                                <span>+996 (775) 58 0611</span>
                            </div>
                        </Link>
                    </div>
                </section>
                <section className={cls.block3}>
                    <div className={cls.sec1}>
                        <Link to={'https://beeline.kg/ru'}>
                            <BeelineSvgLogoWithNameIcons className={cls.beelineSvgLogoWithNameIcons}/>
                        </Link>
                        <span className={cls.text}>
                            © Beeline, 2024
                        </span>
                        <div className={cls.boxForIconsMarkets}>
                            <Link to={'https://play.google.com/store/apps/details?id=kg.beeline.odp&hl=ru'}>
                                <PlayMarketIcons className={cls.playMarketIcons}/>
                            </Link>
                            <Link to={'https://itunes.apple.com/ru/app/kg.beeline.odp/id842425573?mt=1'}>
                                <SafariIcons className={cls.safariIcons}/>
                            </Link>
                        </div>
                    </div>
                </section>
            </nav>
        </footer>
    );
};

export default Footer;