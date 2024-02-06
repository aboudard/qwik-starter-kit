import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header/header';
import Footer from '~/components/starter/footer/footer';

import styles from './styles.css?inline';

export const useServerTimeLoader = routeLoader$(() => {
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' } as Intl.DateTimeFormatOptions;
  return {
    date: new Date().toLocaleDateString('fr-FR', options),
  };
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
