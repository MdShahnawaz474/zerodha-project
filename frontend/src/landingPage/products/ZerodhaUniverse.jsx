import React from 'react'
 import zerodhaFundHouse from "../../assets/images/zerodhaFundhouse.png"
 import streakLogo from "../../assets/images/streakLogo.png"
 import senssibleLogo from "../../assets/images/sensibull-logo.svg"
 import smallcaseLogo from "../../assets/images/smallcase-logo.png"
 import tijoriLogo from "../../assets/images/tijori.svg"
 import dittoLogo from "../../assets/images/ditto-logo.png"

const ZerodhaUniverse = () => {
  return (
    <div>
        <div className='container center'style={{ maxWidth: "75%", margin: "0 auto",padding:"80px 0 0 0"} }>
            <div>        
         <h2 className='text-center'>The Zerodha Universe</h2>
            <p className='text-center mt-3'>
        Extend your trading and investment experience even further with our
        partner platforms
        </p>
        </div>


      <div className=' center' style={{
        display:"flex",
        alignItems:'center',
        marginTop:"40px",
        justifyContent:"space-evenly"
      }}>

        {/* div 1 */}
      <div style={{
      }}>

        <div>
         <img style={{height:"55px"}} src={zerodhaFundHouse} alt="zerodhaFundHouse" />
         <p style={{marginTop:"10px", fontSize:".75rem"}}>Our asset management venture <br />
         that is creating simple and transparent index <br />
         funds to help you save for your goals.</p>
        </div>

        <div>
         <img style={{height:"55px"}} src={streakLogo} alt="zerodhaFundHouse" />
         <p style={{marginTop:"10px", fontSize:".75rem"}}>Systematic trading platform <br />
         that allows you to create and backtest <br />
         strategies without coding.</p>
        </div>



      </div>
        
    {/* div 2 */}
    <div>
        
    <div>
         <img style={{height:"40px"}} src={senssibleLogo} alt="zerodhaFundHouse" />
         <p style={{marginTop:"10px", fontSize:".75rem"}}>Our asset management venture <br />
         that is creating simple and transparent index <br />
         funds to help you save for your goals.</p>
        </div>

        <div>
         <img style={{height:"55px"}} src={smallcaseLogo } alt="zerodhaFundHouse" />
         <p style={{marginTop:"10px", fontSize:".75rem"}}>Systematic trading platform <br />
         that allows you to create and backtest <br />
         strategies without coding.</p>
        </div>
    </div>
    
    {/* div 3 */}
    <div>
    <div>
         <img style={{height:"55px"}} src={tijoriLogo} alt="zerodhaFundHouse" />
         <p style={{marginTop:"10px", fontSize:".75rem"}}>Our asset management venture <br />
         that is creating simple and transparent index <br />
         funds to help you save for your goals.</p>
        </div>

        <div>
         <img style={{height:"55px"}} src={dittoLogo } alt="zerodhaFundHouse" />
         <p style={{marginTop:"10px", fontSize:".75rem"}}>Systematic trading platform <br />
         that allows you to create and backtest <br />
         strategies without coding.</p>
        </div>
    </div>
  
      </div>
        </div>
    </div>
  )
}

export default ZerodhaUniverse