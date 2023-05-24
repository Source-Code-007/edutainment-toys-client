import GoToTop from '../../HelpingCompo/GoToTop';
import Banner from './Banner';
import Discount from './Discount';
import Gallery from './Gallery';
import HowItWorks from './HowItWorks';
import SatifiedPeople from './SatifiedPeople';
import ToyImportance from './ToyImportance';
import ToyTab from './ToyTab';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <ToyTab></ToyTab>
            <HowItWorks></HowItWorks>
            <ToyImportance></ToyImportance>
            <Gallery></Gallery>
            <SatifiedPeople></SatifiedPeople>
            <Discount></Discount>
            <GoToTop></GoToTop>
        </>
    );
};

export default Homepage;