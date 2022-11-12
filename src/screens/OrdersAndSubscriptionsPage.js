import React from 'react'
import {Tab, Tabs } from 'react-bootstrap'

export default function OrdersAndSubscriptionsPage() {
  return (
    <div className="p-5" style={{minHeight:"70vh"}}>
      <Tabs
        defaultActiveKey="Orders"
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="Orders" title="Order History">
          <div style={{minHeight:"20vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <p className='text-center'>You haven't placed any orders yet.</p>
          </div>
        </Tab>
        <Tab eventKey="Subscriptions" title="Subscriptions">
          <div style={{minHeight:"20vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <p className='text-center'>No subscriptions found. Once you subscribe to products, you can see your subscriptions here.</p>
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}
