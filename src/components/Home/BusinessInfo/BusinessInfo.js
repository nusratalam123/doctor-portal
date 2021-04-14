import React from 'react';
import InfoCard from '../InfoCard/InfoCard';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const infoData=[
    {
        title:'Opening Hours',
        description:'we are open 7 days',
        icon:faClock,
        background:'primary'
    },
    {
        title:'visiting our location',
        description:'Brooklyn, NY 10003 USA',
        icon:faMapMarker,
        background:'dark'
    },
    {
        title:'Call us Now',
        description:'+1235678899776',
        icon:faPhone,     
        background:'primary'
    },
]
const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
           <div className="w-75 row">
           {
                infoData.map(info=><InfoCard info={info}></InfoCard>)
            }
           </div>
        </section>
    );
};

export default BusinessInfo;