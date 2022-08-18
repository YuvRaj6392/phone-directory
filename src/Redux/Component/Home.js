import React from 'react'
import './Home.css'
export default function Home(props) {
  console.warn(props)
  return (
  
    <div style={{marginLeft:"50px",marginRight:"50px"}}>
    <div className='addToCart'>
        <img src="https://imgs.search.brave.com/GmsskzKr62V9hCtxRb5LQNmhgnnpk9u69vOM68Oc8Cc/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5i/ZGVPRk5YWUVZUmEz/QlhvWk1iYVpBSGFI/YSZwaWQ9QXBp" alt="" className='addToCartImg' />
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
              <button style={{backgroundColor:"black",color:"white",borderRadius:"10%"}} onClick={()=>{
                props.addToCartHandler({
                  price:1000,name:"i-phone"
                })
              }}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}
