import React from 'react';
import Blogs from '../Blogs/Blogs';
import Doctor from '../Doctor/Doctor';
import FeatureService from '../FeatureService/FeatureService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header></Header>
         <Services></Services>
         <FeatureService></FeatureService>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Doctor></Doctor>
        </div>
    );
};

export default Home;