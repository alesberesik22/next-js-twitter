import React from 'react';
import {useSession} from "next-auth/react";
import Form from "~/components/NewTweetForm/Form/Form";

const NewTweetForm = () => {
    const session = useSession();
    if (session.status !== 'authenticated') return null;

    return <Form/>

};

export default NewTweetForm;
