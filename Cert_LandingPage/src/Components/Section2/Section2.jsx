import React, {useState} from 'react';
import YouTube from 'react-youtube';
import ClipLoader from "react-spinners/ClipLoader";
import './Section2.css'

const Section2 = () => {

    let [videoLoaded, setVideoLoaded] = useState(false);

    return (
        <div className={"sectionContainer blue"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="sectionBackground">
                <path fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,106.7C384,128,480,224,576,261.3C672,299,768,277,864,250.7C960,224,1056,192,1152,186.7C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div id="section2" className="section">
                <div className="videoContainer" style={videoLoaded ? {display: "block"} : {display: "none"}}>
                    <YouTube
                        videoId={"4MNHhJjeroA"}                  
                        className="video"                
                        containerClassName="videoContainer"
                        onReady={() => setVideoLoaded(true)} 
                    />
                </div>
                <div className="videoLoading" style={!videoLoaded ? {display: "block"} : {display: "none"}}>
                    <ClipLoader />
                </div>
                <div className="halfText">
                    <h1>Test Header</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptates reprehenderit quasi deserunt exercitationem perferendis delectus at ex. Nesciunt obcaecati iusto dolor voluptas ipsum fugit, ducimus consequuntur eligendi labore?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptates reprehenderit quasi deserunt exercitationem perferendis delectus at ex. Nesciunt obcaecati iusto dolor voluptas ipsum fugit, ducimus consequuntur eligendi labore?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ipsam voluptates reprehenderit quasi deserunt exercitationem perferendis delectus at ex. Nesciunt obcaecati iusto dolor voluptas ipsum fugit, ducimus consequuntur eligendi labore?</p>
                </div>
                
            </div>
        </div>
    );
}

export default Section2;
