import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { getProfile } from '../src/services/user';
import '../src/scss/style.scss';
import UserContext from '../src/Components/Context/UserContext';
import { logout } from '../src/services/auth';

/* eslint-disable-next-line */
function MyApp({ Component, pageProps }) {
  const [User, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /** =============================== Set User Context if token Exists ============================== */

  const profile = async () => {
    try {
      const res = await getProfile();
      const user = res && res.data && res.data.data;
      if (user) {
        setUser({
          email: user.email,
          name: user.name,
          role: user.role,
          id: user._id
        });
      }
    } catch (error) {
      logout();
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('fbToken');
    if (token) {
      profile();
    } else setIsLoading(false);
  }, []);

  if (isLoading) return <div>Loading ....</div>;
  else
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <title>Feminist Bible</title>
        </Head>
        <UserContext.Provider value={{ User, setUser }}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </UserContext.Provider>
      </>
    );
}

export default MyApp;
