import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

export default function Phonedirectory() {
    const [subscriberList,setSubscriberList]=useState([
      {
        name:"abhinav",
        phone:"898977349"
      }
    ])
    function addHandler(newSubscriber)
    { 
     const subscriberList1=subscriberList;
     subscriberList1.push(newSubscriber);
     setSubscriberList(subscriberList1);
     console.log(subscriberList);
     console.log(newSubscriber);

    }
  return (
    <Router>
    <Routes>
    <Route path="/" element={<ShowSubscribers subscriberList={subscriberList} />} />
    <Route path="/add" element={<AddSubscriber addHandler={addHandler}  />}  />




    </Routes>




    </Router>
  )
}
