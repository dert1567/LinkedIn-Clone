import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {

    const newsAritcle = (heading, subtitle) => (
       <div className="widgets__article">
           <div className="widgets__articleLeft">
               <FiberManualRecordIcon />
           </div>
       

       <div className="widgets__articleRight">
           <h4>{heading}</h4>
           <p>{subtitle}</p>
       </div>
</div>
        
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
                    </div> 
              {newsAritcle('Conroa','C19')}
              {newsAritcle('Conroa','C19')}
              {newsAritcle('Conroa','C19')}
              {newsAritcle('Conroa','C19')}
        </div>
       
    )
}

export default Widget
