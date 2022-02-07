import React from "react";
import PropTypes from 'prop-types';

const Notification = ({titleZero}) => {
    return <h3>{titleZero}</h3>
}
export default Notification;

Notification.propTypes = {
    titleZero: PropTypes.string.isRequired,
}

