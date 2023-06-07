import React from 'react';
import styles from './InfiniteTweetList.module.scss'
import variables from '../../styles/variables.module.scss'
import InfiniteScroll from "react-infinite-scroll-component";
import {Tweet} from "~/types/types";
import TweetCard from "~/components/InfiniteTwwetList/TweetCard/TweetCard";

type Props = {
    isLoading: boolean;
    isError: boolean;
    hasMore: boolean | undefined;
    fetchNewTweets: () => Promise<unknown>;
    tweets?:Tweet[]
}

const InfiniteTweetList:React.FC<Props> = ({tweets,fetchNewTweets,hasMore,isError,isLoading}) => {
    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error...</h1>
    if(tweets == null || tweets.length === 0){
        return <h2 className={styles['no-tweets']} style={{color:variables.primaryColor}}>No tweets</h2>
    }
    return (
        <ul style={{width:'100%', margin:0}}>
            <InfiniteScroll next={fetchNewTweets} hasMore={hasMore || false} loader={'Loading...'} dataLength={tweets.length}>
                {tweets.map(tweet => (
                    <TweetCard {...tweet} key={tweet.id}/>
                ))}
            </InfiniteScroll>
        </ul>
    );
};

export default InfiniteTweetList;
