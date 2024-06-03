import React from 'react';
import cls from "../App.module.scss"
import {AppRouter} from "./Providers/Router";
import {Header} from "../3Widgets/Header/";
import {SecondHeader} from "../3Widgets/SecondHeader";
import Footer from "../3Widgets/Footer/ui/Footer";

function App() {
  return (
    <div className={cls.App}>
        <Header/>
        <SecondHeader/>
        <AppRouter/>
        <Footer/>
    </div>
  );
}

export default App;
