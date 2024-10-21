// styling
import styles from './styles.module.scss';

// components
import Spring from '@components/Spring';
import ChatMessage from '@components/ChatMessage';
import DateSeparator from '@ui/DateSeparator';
import ScrollContainer from '@components/ScrollContainer';

// hooks
import useMeasure from 'react-use-measure';

// utils
import dayjs from 'dayjs';

// data placeholder
import chat from '@db/chat';

const LatestMessages = () => {
    const [ref, {height}] = useMeasure();
    const uniqueDates = [...new Set(chat.map((item) => dayjs(item.timestamp).format('DD.MM.YY')))];

    const messagesByDate = uniqueDates.map((date) => {
        return chat.filter((item) => dayjs(item.timestamp).format('DD.MM.YY') === date);
    });

    return (
        <Spring className="card height-w-2">
            <h3 className={styles.header} ref={ref}>Latest messages</h3>
            <ScrollContainer height={height} bg="widget-bg">
                <div className={`${styles.main} track flex flex-col gap-2.5`}>
                    {
                        uniqueDates.map((date, index) => {
                            const isToday = dayjs().format('DD.MM.YY') === date;
                            return (
                                <div key={index}>
                                    <DateSeparator date={isToday ? 'Today' : date} />
                                    <div className={styles.main_group}>
                                        {
                                            messagesByDate[index].map((message, index) => {
                                                return (
                                                    <ChatMessage key={index} index={index} {...message} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </ScrollContainer>
        </Spring>
    )
}

export default LatestMessages