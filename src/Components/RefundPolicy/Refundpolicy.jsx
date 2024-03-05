import React from 'react'
import Footer from '../Footer'
import DrawerAppBar from '../Navbar/DrawerAppBar'

const RefundPolicy = () => {
  return (
    <div>
      <DrawerAppBar />
      <div className='w-[70%] flex justify-center items-center ml-56'>


        <div className='flex flex-col justify-center items-start mx-10 font-nunito w-full gap-5'>
          <div className='flex flex-col justify-center items-start mx-10 gap-5 mt-8 text-start'>
            <h1 className='' style={{ fontSize: "25px", textAlign: "start" }}>Refund Policy for Online Adventure/Experience/Activity Booking with Make My Bucket List</h1>
            <p>Thank you for choosing “Make My Bucket List” Powered by ManiPro IT Services (OPC) Pvt Ltd for your adventure and experience. We strive to provide you with an unforgettable adventure. Please read our refund policy carefully to understand our guidelines for refunds.</p>
          </div>
          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>1.	Cancellation by the Customer:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li><b>Full Refund: </b>If you cancel your adventure booking at least 14 days before the scheduled date, you are eligible for a full refund.</li>
              <li>	<b>Partial Refund:</b> Cancellations made within 8 to 13 days day window of the adventure date may be eligible for a partial refund, subject to 25% cancellation fee.</li>
              <li><b>No Refund:</b> you cancel your adventure booking within 7 days before the scheduled date, you are eligible for a No refund</li>
              <li>Subject to individual Experience Description on Individual Experience refund by the provider</li>
              <li>Transaction charges or Processing Fee will not be refunded in case any</li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>2.	Cancellation by Make My Bucket List:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li>In the unlikely event that “Make My Bucket List” has to cancel an adventure due to unforeseen circumstances such as extreme weather, natural disasters, or any other unavoidable reasons, customers will be offered the choice of rescheduling or receiving a full refund subject to individual Experience Provider.</li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>3.	Refund Processing Time:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li>Refunds will be processed within 7 business days after the cancellation is approved. Please note that the time it takes for the refund to reflect in your account may vary depending on your payment method and financial institution.</li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>4.	No-Shows:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li>No refunds will be issued for customers who do not show up for their scheduled adventure without prior notice.</li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>5.	Change of Plans:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li>
                If you wish to change the date of your adventure, please contact us at least 14 days before the scheduled date. We will do our best to accommodate your request, depending on availability from experience provider.
              </li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>6.	Refund Requests:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li>All refund requests must be submitted in writing via email to maniproitservices@gmail.com. Please include your booking reference number, the reason for the refund, and any supporting documentation.</li>
            </ul>
          </div>

          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>7.	Gift Certificates and Vouchers:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li>Gift certificates and vouchers are non-refundable but may be transferable with prior notice and approval from Make My Bucket List.</li>
            </ul>
          </div>

          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>8.	Refund Exceptions:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li>
                Refunds are not provided for services that have already been partially or fully utilized.
              </li>
            </ul>
          </div>

          <div className='flex flex-col justify-center items-start mx-10 gap-5'>
            <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>9.	Policy Updates:</h3>
            <ul className='flex justify-center items-start flex-col gap-4 text-start'>
              <li>“Make My Bucket List” Powered by ManiPro IT Services (OPC) Pvt Ltd reserves the right to update or modify this refund policy at any time without prior notice. Any changes will be effective immediately upon posting on our website.</li>
            </ul>
          </div>

          <div className='flex flex-col justify-center items-start mx-10 gap-3 text-start mb-10'>
            <p>By booking an adventure with “Make My Bucket List” Powered by ManiPro IT Services (OPC) Pvt Ltd, you acknowledge and agree to comply with this refund policy.</p>

            <p>If you have any questions or concerns regarding this policy, please contact our customer service at maniproitservices@gmail.com.</p>

            <p>Thank you for choosing “Make My Bucket List” Powered by ManiPro IT Services (OPC) Pvt Ltd. We look forward to providing you with a thrilling adventure!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default RefundPolicy