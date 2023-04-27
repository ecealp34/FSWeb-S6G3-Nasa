import React from "react"
import Explanation from "./explanation";
import Image from "./img"
import Title from "./title"
import { Button } from "reactstrap"
const ApodViewer = (props) => {
    const { APPd } = props;
    

    return(

    <div>
        <Button color="primary">{APPd.date}</Button>
        <Title>{APPd.title}</Title>
        <Explanation>{APPd.explanation}</Explanation>
        <Image src={APPd.hdurl} alt={APPd.explanation} width="500" height="500"/>
        <p>
          { APPd.media_type}
           {APPd.service_version}
        </p>

        <div>
        <image src={APPd.url} alt={APPd.explanation} width="500" height="500" />
        </div>
    </div>

  );
};





  export default ApodViewer;