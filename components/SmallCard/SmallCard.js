import React from 'react'
import styles from "@/styles/SmallCard.module.css";
import carImg from "@/public/images/5.jpg";
 const SmallCard = () => {
  return (
    <div className=" m-0 my-2 row align-items-center  p-0">
      <div className={`col-sm-5 col-12 bg-dark p-0 ${styles.imgWrap}`}>
        <img src={carImg.src} className="img-fluid h-100 rounded" alt="" />
        <div className={`${styles.loveIcon} bg-white rounded-circle`}>
          <i className="fas fa-heart"></i>
        </div>
        <div className={`${styles.live}`}>
          <i className="fas fa-dot-circle"></i>
        </div>
        <div className={`${styles.liveNow}`}>live Now</div>
        <div className={`${styles.mazad}`}>مزاد عام</div>
      </div>
      <div className={`col-sm-7 col-12 text-secondary  ${styles.cardText}`}>
        <p>
          سيارة بي ام دبليو تصنيع 2021 بحالة جديدة سيارة بي ام دبليو
        
        </p>
        <p className="m-0 d-flex align-items-center justify-content-between">
          <span>اعلي سعر</span>
          <span style={{fontWeight:"bold",fontSize:"16px",color:"indigo"}}> 500 $ </span>
        </p>
      </div>
    </div>
  );
}

export default SmallCard