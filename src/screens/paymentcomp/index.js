import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import stripe from 'tipsi-stripe';
let publishableKey =
  'pk_test_51JuwLLFZA0WXAOtjmYDqmu2ViVArHW7xNUjbhsB1x7ffGhdOPoAdNC9BsYFpEdq0fLJ2mRBeB36GpjlGWvusiNkS00Ku2zpKAS';
let scretKey =
  'sk_test_51JuwLLFZA0WXAOtjb2zR1RHeT3nNiFDxcwkvMQE502KWOL8UknCQPPcrnv5euCfm5mst9verejrtGK2VZxlwaWzH0062oWbCcw';

const Payment = ({}) => {
  useEffect(() => {
    stripeusage();
  });
  const stripeusage = async () => {
    stripe.setOptions({
      publishableKey: publishableKey,
      androidPayMode: 'test', // Android only
    });
  };

  const PaymentForm = async () => {
    const options = {
      requiredBillingAddressFields: 'full',
      prefilledInformation: {
        billingAddress: {
          name: 'Gunilla Haugeh',
          line1: 'Canary Place',
          line2: '3',
          city: 'Macon',
          state: 'Georgia',
          country: 'US',
          postalCode: '31217',
        },
      },
    };

    const paymentMethod = await stripe.paymentRequestWithCardForm(options);
    console.log({paymentMethod});
  };
  return  <PaymentForm/>;
};

export { Payment};
