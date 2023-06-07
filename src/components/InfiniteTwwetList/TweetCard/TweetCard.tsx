import React from 'react';
import styles from './TweetCard.module.scss'
import {Tweet} from "~/types/types";
import Link from "next/link";
import ProfileImage from "~/components/ProfileImage/ProfileImage";

type Props = Tweet
const TweetCard:React.FC<Props> = ({id,createdAt,content,user,likedByMe,likeCount}) => {
    const dateTimeFormatter = new Intl.DateTimeFormat(undefined,{dateStyle:'short'})
    return (
        <li className={styles['tweet-card']}>
            <Link href={`/profiltes/${user.id}`}>
                <ProfileImage src={user.image}/>
            </Link>
            <div className={styles['tweet-card-user-info']}>
                <div className={styles['tweet-card-user-info-user']}>
                    <Link href={`/profiles/${user.id}`} className={styles['user-name']}>{user.name}</Link>
                    <span className={styles['date']}>-</span>
                    <span className={styles['date']}>{dateTimeFormatter.format(createdAt)}</span>
                </div>
                <p className={'content-style'}>{content}</p>
            </div>
        </li>
    );
};


export default TweetCard;
