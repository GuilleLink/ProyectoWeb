import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header";
import FullCard from "./Components/FullCard/FullCard";
import "./indexStyle.scss"

const App = () => {



    return(
        <div>
            <Header />
            <FullCard type='top-full-card' tittle="Make someone's holiday." subtittle='' sub_subtittle='' redirectionLink='Shop Gifts'/>
            <FullCard type='middle-full-card' tittle='iPhone 11 Pro' subtittle='Pro cameras. Pro display. Pro performance.' sub_subtittle='From $24.95/mo. or $599 with trade-in.' redirectionLink='Learn more > Buy >'/>
            <FullCard type='bottom-full-card' tittle='iPhone 11' subtittle='Just the right amount of everything.' sub_subtittle='From $16.62/mo. or $399 with trade-in.' redirectionLink=''/>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));