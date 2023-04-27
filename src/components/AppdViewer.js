import React from "react"

const ApodViewer = (props) => {
    const { APPd } = props;
    

    return(

    <div>
        <p>{APPd.date}</p>
        <p>{APPd.explanation}</p>
        <img src={APPd.hdurl} alt={APPd.explanation} width="500" height="500"/>
        <p>{ APPd.media_type}
           {APPd.service_version}
        </p>

        <div>
        {APPd.title}
        <img src={APPd.url} alt={APPd.explanation} width="500" height="500" />
        </div>
    </div>

  );
};





  export default ApodViewer;