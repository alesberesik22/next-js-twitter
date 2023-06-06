import React from 'react';
import styles from './SideNav.module.scss';
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
const SideNav = () => {
    const session = useSession();
    const user =  session.data?.user;
    return (
        <nav className={styles['side-nav-container']}>
            <ul className={styles['side-nav-container-items']}>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                {user !== null && (
                    <li>
                        <Link href={`/profiles/${user?.id || ''}`}>Profile</Link>
                    </li>
                )}
                {user === null ? (
                    <li>
                        <button onClick={() => signIn()}>Log in</button>
                    </li>
                ):(
                    <li>
                        <button onClick={() => signOut()}>Log out</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default SideNav;
