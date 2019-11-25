import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import FullCard from "./Components/FullCard/FullCard";
import HalfCard from "./Components/HalfCard/HalfCard";
import Footer from "./Components/Footer/Footer";
import "./indexStyle.scss";

const App = () => {
    return(
        <div className='all-flexed'>
            <Header />
            <FullCard type='top-full-card' tittle="" subtittle='' sub_subtittle='' redirectionLink=''/>
            <FullCard type='middle-full-card' tittle='iPhone 11 Pro' subtittle='Pro cameras. Pro display. Pro performance.' sub_subtittle='From $24.95/mo. or $599 with trade-in.' redirectionLink='Learn more > Buy >'/>
            <FullCard type='bottom-full-card' tittle='iPhone 11' subtittle='Just the right amount of everything.' sub_subtittle='From $16.62/mo. or $399 with trade-in.' redirectionLink='Learn more > Buy >'/>
            <div className='grided'>
                <HalfCard type='first-top' top_image='watchSeries.png' tittle='' subtitle="With the new Always-on Retina display. You've never seen a watch like this." redirectionLink='Learn more > Buy >'/>
                <HalfCard type='second-top' top_image='cardIsHere' tittle='' subtitle="Get 3% Daily Cash on purchases from Apple using Apple Card." redirectionLink='Learn more > Apply now >'/>            
                <HalfCard type='third-top' top_image='appleTVplus.png' tittle='' subtitle="" redirectionLink='Watch the trailer'/>
                <HalfCard type='fourth-top' top_image='' tittle='AirPods Pro' subtitle="" redirectionLink='Learn more > Buy >'/>            
                <HalfCard type='fifth-top' top_image='' tittle='MacBookPro' subtitle="The best for the brightest." redirectionLink='Learn more > Buy >'/>
                <HalfCard type='sixth-top' top_image='new-ipad' tittle='' subtitle="Like a computer. Unlike any computer." redirectionLink='Learn more > Buy >'/>   
            </div>
            <Footer />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));