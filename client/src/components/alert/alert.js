import React,{useContext,useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';

import AlertContext from '../../context/alert/alertContext';
import './alert.scss';

const Alert = () => {
    const {hide, alert } = useContext(AlertContext);

    useEffect(()=>{
      const timeoutId =  setTimeout(hide,2000);
      return ()=> clearTimeout(timeoutId);
    },[]);

    return(
        <CSSTransition
            in={alert.visible}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit>           
            <div className={`alert alert-${alert.type || 'warning'} `}>
                <strong className="mr-1">Warning!</strong>
                {alert.text}
            </div>
        </CSSTransition>
    );
};

export default Alert;