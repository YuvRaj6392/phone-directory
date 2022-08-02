import React, { Component } from 'react'
import Aashowsubscriber from './Aashowsubscriber';
import Aaaddsubscriber from './Aaaddsubscriber';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
export default class Aaphonedirectory extends Component {
    constructor(){
        super();
        this.state={
            subscribersList:[
                
            ]
        }
    }
    addSubscribersHandler(newContact)
    {
        if(this.state.subscribersList.length>0)
        {
            newContact.id=this.state.subscribersList[this.state.subscribersList.length-1].id+1
        }
        else
        {
            newContact.id=1;
        }
        this.state.subscribersList.push(newContact);
        this.setState({
            subscribersList:this.state.subscribersList
        });
        console.log(this.state.subscribersList);
    }
    deleteSubscribersHandler(subId)
    {
     let subscribersList=this.state.subscribersList;
     let subIndex=0;
     subscribersList.forEach(function(subscriber,index){
        if(subscriber.id===subId)
        {
                subIndex=index;
        }

     },this)
     let newsSubscriber=subscribersList;
     newsSubscriber.splice(subIndex,1);
     this.setState({
        subscribersList:newsSubscriber
     })
        
    }
  render() {
   
    return (
//      <Router>

//   <div>
//       <Route exact path="/">
//       <Aashowsubscriber showSubscribersList={this.state.subscribersList} deleteSubscribersHandler={this.deleteSubscribersHandler.bind(this)} />
//       </Route>
     

//       <Route path="/add">
//       <Aaaddsubscriber addSubscribersHandler={this.addSubscribersHandler.bind(this)}  />
//       </Route>
      
//       </div>
//        </Router>  

<Router>
    <Routes>
        <Route path="/" element={ <Aashowsubscriber showSubscribersList={this.state.subscribersList} deleteSubscribersHandler={this.deleteSubscribersHandler.bind(this)} />}  />

        <Route path="add" element={<Aaaddsubscriber  addSubscribersHandler={this.addSubscribersHandler.bind(this)}  />} />

    </Routes>
</Router>

    )
  }
}
