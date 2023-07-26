import { CardElement } from '@stripe/react-stripe-js';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'en', ['common', 'footer'])),
    },
  };
};

export default function TestPage() {
  // const stripe = useStripe();
  // const elements = useElements();
  return (
    <>
      <CardElement></CardElement>
    </>
  );
}
