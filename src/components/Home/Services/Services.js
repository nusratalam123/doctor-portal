import React from 'react';
import fluoride from '../../../images/florid.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData=[{

    name: 'Fluoride Treatment',
    image:fluoride,
},
{
name: 'Cavity Filling',
image:cavity,
},
{
    name: 'Teeth whitening',
    image:whitening,
    },

]


const Services = () => {
    return (
       <section className="services-container mt-5">
           <div className="text-center">
               <h5 style={{color:'aqua'}}>OUR Services</h5>
               <h2 style={{color:':#3A4256'}}>SERVICES we provider</h2>
           </div>
           <div className="d-flex justify-content-center">
           <div className="w-75 row mt-5 pt-5">
           {
                servicesData.map(service=><ServiceDetail service={service}></ServiceDetail>)
            }
           </div>
        </div>
       </section>  
     );
};

export default Services;