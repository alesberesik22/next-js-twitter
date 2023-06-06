import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.scss";
import Head from "next/head";
import SideNav from "~/components/SideNav/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter clone</title>
        <meta name={'description'} content={'This is a Twitter clone'}/>
        <link rel={'icon'} href={'/favicon.ico'}/>
      </Head>
      <div className={'container'}>
          <SideNav/>
          <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);