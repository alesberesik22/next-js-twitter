import React from 'react';
import styles from './NewTweetForm.module.scss'
import Button from "~/components/Button/Button";

const NewTweetForm = () => {
    return (
        <form className={styles['new-tweet-form']}>
            <div className={styles['new-tweet-form-textarea']}>
                <textarea placeholder={`What's happening`}></textarea>
            </div>
            <Button type={'button'} style={{width: '100px',alignSelf:'flex-end'}}>Tweet</Button>
        </form>
    );
};

export default NewTweetForm;
