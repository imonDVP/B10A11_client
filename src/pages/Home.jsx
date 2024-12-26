import Carousel from "../components/Carousel";
import FeaturedTab from "../components/FeaturedTab";
import TabCategories from "../components/TabCategories";


const Home = () => {
    return (
        <div >
            <Carousel></Carousel>
            <TabCategories></TabCategories>
            <FeaturedTab></FeaturedTab>
        </div>
    );
};

export default Home;