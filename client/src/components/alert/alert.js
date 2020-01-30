import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group';

import AlertContext from '../../context/alert/alertContext';
import './alert.scss';

const Alert = () => {
    const { alert } = useContext(AlertContext);

    return (
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
                {alert.text}
            </div>
        </CSSTransition>
    );
};

export default Alert;