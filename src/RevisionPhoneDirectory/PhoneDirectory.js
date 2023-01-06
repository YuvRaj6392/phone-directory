import React, { useState } from 'react'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

export default function Phonedirectory() {
    const [subscriberList,setSubscriberList]=useState([
     
    ])
    function addHandler(newSubscriber)
    { 
     const subscriberList1=subscriberList;
     if(subscriberList1.length>0)
     {
      newSubscriber.id=subscriberList1[subscriberList1.length-1].id+1
     }
     else
     {
      newSubscriber.id=1;
     }
     subscriberList1.push(newSubscriber);
     setSubscriberList(subscriberList1);
     console.log(subscriberList);
     console.log(newSubscriber);

    }

    function deleteHandler(id)
    {
    const  subscriberList1=subscriberList;
    let subIndex=0;
    subscriberList1.forEach(function(subscriber,index){
      if(subscriber.id===id)
      {
              subIndex=index;
      }
      subscriberList1.splice(subIndex,1);
      setSubscriberList(subscriberList1);

   })

    }
 
  return (
    <Router>
    <Routes>
    <Route path="/" element={<ShowSubscribers subscriberList={subscriberList} deleteHandler={deleteHandler} />} />
    <Route path="/add" element={<AddSubscriber addHandler={addHandler}  />}  />




    </Routes>




    </Router>
  )
}
