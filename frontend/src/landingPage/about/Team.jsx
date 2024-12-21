import React from "react";
import Hanan_Photo from "../../assets/images/Hanan.jpg";
import CFO from "../../assets/TeamImages/Nikhil.jpg"
import CTO from "../../assets/TeamImages/Kailash.jpg"
import COO from "../../assets/TeamImages/Venu.jpg"
import Director from "../../assets/TeamImages/Seema.jpg"
import COE from "../../assets/TeamImages/karthik.jpg"
import Director2 from "../../assets/TeamImages/Austin.jpg"
const Team = () => {
  return (
    <div
      className="container mt-5 "
      style={{maxWidth: "70%",
     margin:"auto" }}
    >
        {/* 1st line */}
      <div className="row text-center ">
        <div style={{display:"flex"}}>
        
        <div className=" text center" style={{}}>
          <img
            style={{
                height: "280px",
            
              borderRadius: "100%",
              padding: "20px 50px"
            }}
            src={CFO}/>
            <h5>Nikhil Kamath</h5>
            <p>Co-founder & CFO</p>
        </div>


        
        <div className=" text center" style={{}}>
          <img
            style={{
              height: "280px",
             
              borderRadius: "100%",
                 padding: "20px 50px"
            }}
            src={CTO}/>
            <h5>Dr. Kailash Nadh</h5>
            <p>CTO</p>
        </div>
 
        <div className=" text center" style={{}}>
          <img
            style={{
              height: "280px",
             
              borderRadius: "100%",
                 padding: "20px 50px"
            }}
            src={COO}/>
            <h5>Venu Madhav</h5>
            <p>COO</p>
        </div>
        

        </div>
        </div>
         
        {/* 2nd line */}

        <div className="row text-center ">
        <div style={{display:"flex"}}>
        
        <div className=" text center" style={{paddingBottom:"30px"}}>
          <img
            style={{
                height: "280px",
              borderRadius: "100%",
              padding: "20px 50px"
            }}
            src={Hanan_Photo}/>
            <h5>Hanan Delvi</h5>
            <p>CCO</p>
        </div>


        <div className=" text center" style={{}}>
          <img
            style={{
                height: "280px",
              marginBottom: "10px",
              borderRadius: "100%",
                 padding: "20px 50px"
            }}
            src={Director}/>
            <h5>Seema Patil</h5>
            <p>Director</p>

        </div>
        
        <div className=" text center" style={{}}>
          <img
            style={{
              height: "280px",
              marginBottom: "10px",
              borderRadius: "100%",
                 padding: "20px 50px"
            }}
            src={COE}/>
            <h5>Karthik Rangappa</h5>
            <p>Chief of Education</p>
        </div>
 
        </div>
        </div>

        <div className="row text-center ">
        <div style={{display:"flex"}}>
        
        <div className=" text center " style={{
            paddingBottom:"80px"
        }}>
          <img
            style={{
                height: "280px",
              marginBottom: "10px",
              borderRadius: "100%",
              padding: "20px 50px",
              paddingBottom:"80px"
            }}
            src={Director2}/>
            <h5>Austin Prakesh</h5>
            <p>Director Strategy</p>
        </div>       
 
        </div>
        </div>
      </div>
  );
};

export default Team;
