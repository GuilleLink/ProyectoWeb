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
            <HalfCard type='first-top' top_image='watchSeries.png' tittle='' subtittle="With the new Always-on Retina display. <br>You've never seen a watch like this." redirectionLink='Learn more > Buy >'/>
            <HalfCard type='second-top' top_image='cardIsHere' tittle='' subtittle="With the new Always-on Retina display. <br>You've never seen a watch like this." redirectionLink='Learn more > Buy >'/>            
            <Footer />
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));