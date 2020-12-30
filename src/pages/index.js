import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import SideBar from '../components/Sidebar';
import Services from '../components/Services';
import { homeObjectOne, homeObjectTwo, homeObjectThree } from '../components/InfoSection/Data';
import { DataServicesOne, DataServicesTwo, DataServicesThree } from '../components/Services/DataServices';
import Footer from '../components/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(state => !isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Services { ...DataServicesOne }/>
            <InfoSection { ...homeObjectOne }/>
            <InfoSection { ...homeObjectTwo }/>
            <Services { ...DataServicesTwo }/>
            <Services { ...DataServicesThree }/>
            <Footer />
        </>
    )
}

export default Home
