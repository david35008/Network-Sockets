import React, { useState, useEffect } from 'react';
import useEventSource from '../../helpers/eventSourceHook';
import axios from 'axios';

function Header() {

    const [notifications, setNotifications] = useState([]);
    const [shortPolingMessages, setShortPollingMessages] = useState(0);

    const notificationsData = useEventSource("http://localhost:8080/api/sse");

    useEffect(() => {
        if (notificationsData) {
            setNotifications((prev) => [...prev, notificationsData]);
        }
    }, [notificationsData]);

    const shortPollingFetch = async () => {
        const { data } = await axios.get('/api/short-polling')
        setShortPollingMessages(data)
    }

    return (
        <div className="Header">
            The is new notifications: {notifications.length}
            <div>{shortPolingMessages}</div>
            <button onClick={() => shortPollingFetch([])}> active short polling</button>
        </div>
    );
}

export default Header;
