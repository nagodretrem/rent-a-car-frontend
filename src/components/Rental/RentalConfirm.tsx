import React from 'react'
import RentalPayment from './RentalPayment'

type Props = {}

const RentalConfirm = (props: Props) => {
  return (
    <div className="text-center">
    <div
      className="card mx-4 mx-md-5 mt-5 mb-5 shadow-5-strong"
      style={{
        background: "hsla(0, 0%, 10%, 0.8)",
        backdropFilter: "blur(30px)",
      }}
    >
      <div className="card-body py-5 px-md-5">
       <div className='row'> <RentalPayment/></div>
       <div className='row'>sipariş onayı</div>
      </div>
    </div>
  </div>
  )
}

export default RentalConfirm