import React from 'react'
import ClientSayCard from './ClientSayCard'

const ClientSays = () => {
  return (
    <div className="tw-bg-customeBackground">
        <div className="tw-max-w-7xl tw-m-auto">
            <span className="tw-text-center tw-block tw-font-bold tw-text-3xl">What They Say About Us</span>
            <div className="tw-flex tw-justify-between tw-gap-2">
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