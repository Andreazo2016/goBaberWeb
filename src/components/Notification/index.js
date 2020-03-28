import React, { useState, useEffect, useMemo } from 'react';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import api from '~/services/api';
import { MdNotifications } from 'react-icons/md';
import { Container, Badge, NotificationList, Scroll, Notification } from './styles';

export default function Notifications() {

    const [visible, setVisible] = useState(false)
    const [notifications, setNotification] = useState([])

    const hasUnread = useMemo(
        ()=> !!notifications.find( notification => notification.read === false),
        [notifications]
    )


    useEffect(() => {
        async function loadNotifications() {
            const response = await api.get('notifications');

            const data = response.data.map(notification => ({
                ...notification,
                timeDistance: formatDistance(
                    parseISO(notification.createdAt),
                    new Date(),
                    { addSuffix: true, locale: pt }

                )
            }))
            setNotification(data)
        }
        loadNotifications()
    })

    async function handleMarkAsRead(id) {
        await api.put(`notifications/${id}`)

        setNotification(
            notifications.map(notification =>
                notification._id === id ? { ...notification, read: true } : notification
            )
        )
    }


    function handleToggle() {
        setVisible(!visible)
    }

    return (
        <Container>
            <Badge onClick={handleToggle} hasUnread={hasUnread}>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>
            <NotificationList visible={visible}>
                <Scroll>
                    {
                        notifications.map(notification => (
                            <Notification key={notification._id} unread={!notification.read}>
                                <p>{notification.content}</p>
                                <time>{notification.timeDistance}</time>
                                {
                                    !notification.read && (
                                        <button type="button" onClick={() => handleMarkAsRead(notification._id)}>Marcar como lida</button>
                                    )
                                }
                            </Notification>
                        ))
                    }
                </Scroll>
            </NotificationList>
        </Container>
    );
}