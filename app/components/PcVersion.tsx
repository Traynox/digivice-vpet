import React from 'react'
import Digivice from './Digivice'
import CardInfo from './card/CardInfo'


 const PcVersion = () => {
    return (
        <>
            <div className='row justify-content-around d-flex align-items-center'>
                <div className=" col-md-4 col-lg-4">
                    <div className="card cristal">
                        <div className="card-body">

                    <Digivice />
                        </div>
                    </div>
                    
                </div>
                <div className="col-md-4 col-lg-4 ">
                   
                    <CardInfo />
                </div>
            </div>
        </>
    )
}
export default PcVersion;