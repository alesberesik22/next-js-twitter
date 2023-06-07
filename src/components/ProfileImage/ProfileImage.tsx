import React from 'react';
import styles from './ProfileImage.module.scss'
import Image from "next/image";

type Props = {
    src?: string | null;
    className?: string
}
const ProfileImage:React.FC<Props> = ({src=null,className=""}) => {
    return (
        <div className={styles['profile-picture']}>
            {src === null ? null : <Image src={src} alt={'Profile Image'} quality={100} fill/>}
        </div>
    );
};

export default ProfileImage;
