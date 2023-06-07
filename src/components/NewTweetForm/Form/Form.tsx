import {useSession} from "next-auth/react";
import React, {FormEvent, useCallback, useLayoutEffect, useRef, useState} from "react";
import styles from "~/components/NewTweetForm/NewTweetForm.module.scss";
import ProfileImage from "~/components/ProfileImage/ProfileImage";
import Button from "~/components/Button/Button";
import {api} from "~/utils/api";

const Form = () => {
    const session = useSession();
    const [inputValue, setInputValue] = useState('');
    const textAreaRef = useRef<HTMLTextAreaElement>();
    const createTweet = api.tweet.create.useMutation({onSuccess:newTweet => {console.log(newTweet); setInputValue('')}});

    const inputRef = useCallback((textArea:HTMLTextAreaElement)=>{
        updateTextAreaSize(textArea);
        textAreaRef.current = textArea;
    },[]);

    useLayoutEffect(()=>{
        updateTextAreaSize(textAreaRef.current)
    },[inputValue]);

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        createTweet.mutate({content:inputValue})
    }

    return (
        <form className={styles['new-tweet-form']} onSubmit={handleSubmit}>
            <div className={styles['new-tweet-form-textarea']}>
                <ProfileImage className={''} src={session?.data?.user.image || null}/>
                <textarea
                    ref={inputRef}
                    style={{height:0}}
                    placeholder={`What's happening`}
                    onChange={(e)=>setInputValue(e.target.value)}
                    value={inputValue}
                />
            </div>
            <Button type={'submit'} style={{width: '100px',alignSelf:'flex-end'}}>Tweet</Button>
        </form>
    );
}
const updateTextAreaSize = (textArea?:HTMLTextAreaElement) => {
    if(textArea == null) return

    textArea.style.height = "0"
    textArea.style.height = `${textArea.scrollHeight}px`
};

export default Form;