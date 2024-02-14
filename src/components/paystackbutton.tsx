import { useContext } from 'react';
import { usePaystackPayment } from 'react-paystack';
import { MyContext } from '../provider/context';


const PaystackHookExample = () => {
    const { config, onClose, onSuccess } = useContext(MyContext)

    const initializePayment = usePaystackPayment(config)


    return (
        <div className='mt-12' >
            <button className='w-[150px] p-2 border-2  rounded-lg bg-[#1f883d]  border-[#1f883d] text-white' onClick={() => {
                initializePayment(
                    {
                        config,
                        onSuccess: onSuccess,
                        onClose: onClose
                    }
                )
            }}>Pay Now</button>
        </div>
    );
};

export default PaystackHookExample