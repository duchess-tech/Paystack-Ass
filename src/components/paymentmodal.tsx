import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMultiply } from '@fortawesome/free-solid-svg-icons'
import InputMask from 'react-input-mask';
import PaystackHookExample from '../components/paystackbutton';




const PaymentModal = () => {
    const cancelButtonRef = useRef(null)
    const [loading, setloading] = useState(false)
    const [open, setOpen] = useState(true)

    const onClose = () => {
        setOpen(false)
        setloading(false)
        location.reload()
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10   w-screen">
                    <div className="flex min-h-full items-end justify-center mt-6 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform  rounded-lg flex justify-center h-[300px]  transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-[#ffffff] w-[400px] h-[300px] rounded-xl">
                                    <div className="flex w-full p-3 justify-around">
                                        <h3 className="">Enter your card details to pay</h3>
                                        <FontAwesomeIcon icon={faMultiply} onClick={onClose} className="cursor-pointer " />

                                    </div>

                                    <div className=" mt-3 p-3  flex flex-wrap justify-center">
                                        <div className='w-11/12 p-2 border-2 rounded-lg text-[10px] h-[50px]'>
                                            <div className='flex '>
                                                <label htmlFor="cardNUMBER">CARD NUMBER</label>
                                            </div>
                                            <InputMask mask="9999 9999 9999 9999" maskChar="0" placeholder='0000 0000 0000 0000' className='w-full' />

                                        </div>
                                        <div className='flex justify-between w-11/12  mt-4' >
                                            <div className='w-[160px] h-[50px] p-2 border-2 rounded-lg text-[10px]'>
                                                <div className='flex '>
                                                    <label htmlFor="cardEXPIRY">CARD EXPIRY</label>
                                                </div>
                                                <InputMask mask="99/99" placeholder="MM/YY" className='w-full' />

                                            </div>
                                            <div className='w-[160px] h-[50px] p-2 border-2 rounded-lg text-[10px]'>
                                                <div className='flex '>
                                                    <label htmlFor="cvv">CVV</label>
                                                </div>
                                                <InputMask maskChar=" " mask="999" placeholder="123" className='w-full' />


                                            </div>


                                        </div>


                                    </div>
                                    <div>
                                        <button className='w-[150px] p-2 border-2  rounded-lg bg-[#1f883d]  border-[#1f883d] text-white' >{loading ? <span className='spinner-border'></span> : <p>Pay</p>}</button>
                                        <PaystackHookExample />
                                    </div>
                                </div>
                            </Dialog.Panel>


                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
export default PaymentModal
