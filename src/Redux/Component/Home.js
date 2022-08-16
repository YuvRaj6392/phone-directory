import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div style={{marginLeft:"50px",marginRight:"50px"}}>
    <div className='addToCart'>
        <img src="https://cdn-icons.flaticon.com/png/512/3757/premium/3757835.png?token=exp=1660681735~hmac=929d5eddb97e1dfca80a5078842e1824" alt="" className='addToCartImg' />
    </div>
        <h1 style={{textAlign:"center"}}>Home Component</h1>
        <div className='cart-wrapper' style={{display:"flex",alignItems:"center",border:"1px solid black",maxWidth:"420px"}}>
            <div className='img-wrapper item'>
                <img src="https://imgs.search.brave.com/xXKqQKWuYQkX_Yc8yT5osOil7Sd3qu7DSq20QQLcjuA/rs:fit:1022:1024:1/g:ce/aHR0cHM6Ly93d3cu/aXBob25laGFja3Mu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDEyLzA5L2lQaG9u/ZS01LWJsYWNrLWZy/b250LWJhY2stMTAy/MngxMDI0LmpwZWc" alt="" height={200} width={220} />
            </div>
            <div className='text-wrapper item'>
               <span>
                I-Phone
               </span>
               <span>
                Price: $350
               </span>
            </div>
            <div className='btn-wrapper item'>
              <button style={{backgroundColor:"black",color:"white",borderRadius:"10%"}}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
