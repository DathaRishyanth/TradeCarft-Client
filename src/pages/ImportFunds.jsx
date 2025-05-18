import { useEffect, useState } from 'react';
import axios from 'axios';

const ImportFunds = () => {
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  const handlePayment = async () => {
    if (!amount || isNaN(Number(amount))) {
      alert('Please enter a valid amount');
      return;
    }

    setIsLoading(true);

    try {
      // Create order
      const token = localStorage.getItem('token'); 
      const { data: order } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/create-order`,
        {
          amount: parseInt(amount),
          currency: 'INR',
          receipt: `receipt_${Math.random().toString(36).substring(7)}`,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );      

      // Intialise razorpay
      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'TradeCraft',
        description: 'Payment for adding funds',
        order_id: order.id,
        handler: async (response) => {
          // Verify payment on the backend
          const { data } = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/api/v1/payment/verify-payment`,
            {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            },
            {
              headers: {
                'Authorization': `Bearer ${token}`,
              },
            }
          );
          

          if (data.success) {
            alert('Payment successful!');
          } else {
            alert('Payment verification failed.');
          }
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment failed, please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Import Funds</h1>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlePayment}
          disabled={isLoading}
          className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition ${
            isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isLoading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
};

export default ImportFunds;