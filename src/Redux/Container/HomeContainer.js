import Home from "../Component/Home";
import React from 'react'
import { Connect } from "react-redux";
import { addToCart } from "../Services/Actions/Actions";
const mapStateToProps=state=>({

})
const mapDispatchToProps=dispatch=>({
  addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)