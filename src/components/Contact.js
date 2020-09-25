import React from "react";
import '../styles/Contact.css';


const Contact = () => {
   return (
      <div className="main-contact">
         <div className="google-map">
            <h1 className='contact-title'>İletişim Bilgileri</h1>
            <ul className='contact-details list-unstyled'>
               <li>Onur Arslan</li>
               <li>Buchfinkweg 28</li>
               <li>12351 Berlin</li>
            </ul>
            <div>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32099.760755365824!2d36.74737163158222!3d38.20601994706285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152d0584384f9d4f%3A0xa3c36b006f7342ae!2zQcSfY2HFn2FyLCA0NjUwMCBBZsWfaW4vS2FocmFtYW5tYXJhxZ8sIFTDvHJrZWk!5e0!3m2!1sde!2sde!4v1599838493133!5m2!1sde!2sde"
               width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false"
               tabIndex="0" title="Standort Köy">Standort Köy
            </iframe>
            </div>
         </div>
      </div>
   );
};

export default Contact

