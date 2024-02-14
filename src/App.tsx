// import { useState } from 'react'
// import PaymentModal from './components/paymentmodal'
import PaystackHookExample from './components/paystackbutton'
import './App.css'


function App() {
  //   const [paymentModal, setPaymentModal] = useState(false)

  //   const ShowPaymentModal = () => {
  //     setPaymentModal(true)
  //   }



  return (

    <>
      <div className='flex justify-center'>
        <div className='mt-24'>
          <h1>Pay with PAYSTACK</h1>
          <PaystackHookExample />

          {/* <button onClick={ShowPaymentModal} className='w-[150px] p-2 border-2  rounded-lg mt-12 bg-[#1f883d] text-white'>Pay Now</button> */}
        </div>
      </div>
      {/* {paymentModal && <PaymentModal />} */}
    </>

  )
}

export default App
