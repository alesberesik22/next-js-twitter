import React from 'react';
import styles from './Button.module.scss'

type Props = {
    small?:boolean;
    gray?:boolean;
    className?:string;
} &  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
const Button = ({small, gray, className="",...props}:Props) => {
    const sizeClasses = small ? styles.small : styles.big;
    const colorClasses = gray ? styles.gray : styles.main
    return (
        <button {...props} className={`${styles['main-button']} ${sizeClasses} ${colorClasses} ${className}`}></button>
    );
};

export default Button;
