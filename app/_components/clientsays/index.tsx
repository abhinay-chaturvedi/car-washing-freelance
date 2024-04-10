import React from 'react'
import ClientSayCard from './ClientSayCard'

const ClientSays = () => {
  return (
    <div className="tw-bg-customeBackground tw-py-3">
        <div className="tw-max-w-7xl tw-m-auto tw-p-3">
            <span className="tw-text-center tw-block tw-font-bold tw-text-3xl tw-my-">What They Say About Us</span>
            <div className="tw-flex tw-justify-between tw-gap-2 tw-mt-3">
                <ClientSayCard/>
                <ClientSayCard/>
                <ClientSayCard/>
                {/* <ClientSayCard/>
                <ClientSayCard/>
                <ClientSayCard/> */}
            </div>
        </div>
    </div>
  )
}

export default ClientSays