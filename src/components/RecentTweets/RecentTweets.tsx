import React from 'react';
import styles from './RecentTweets.module.scss'
import InfiniteTweetList from "~/components/InfiniteTwwetList/InfiniteTweetList";
import {api} from "~/utils/api";

const RecentTweets = () => {
    const tweets = api.tweet.infiniteFeed.useInfiniteQuery({},{getNextPageParam:lastpage => lastpage.nextCursor})
    console.log(tweets)
    return (
        <InfiniteTweetList
            tweets={tweets.data?.pages.flatMap(page => page.tweets)}
            isError={tweets.isError}
            isLoading={tweets.isLoading}
            hasMore={tweets.hasNextPage}
            fetchNewTweets={tweets.fetchNextPage}
        />
    );
};

export default RecentTweets;
