import React from 'react'
import Banner from './Banner';
import Description from './Description';
import descriptionText from './descriptionTextFortnite';
import Navbar from './Navbar';
import Promo from './Promo';
import TournamentsSection from './TournamentsSection';
import './styles/components/Banner.css'

function Fortnite() {
    const title="Fortnite"
    const subheading="Play.Win Rewards.Dominate"
    const image__left="https://i.ibb.co/d6wWnPd/image-Left-1.png"
    const image__right="https://i.ibb.co/jWNnnLg/image-Right-1.png"
    const bannerText1="Win Rewards"
    const bannerDesc1="Level up your gaming, always something new to discover. Best part, Win rewards while having fun!"
    const image1= "https://i.ibb.co/b1Zszgs/image-1.png"
    const bannerText2="Join Teams"
    const bannerDesc2="Welcome to the Gamerz Fam, where gamerz are more than just a tag. "
    const image2="https://i.ibb.co/W5wg2Jw/image-3.png"
    const image__left__id="fortnite__left"

    return (
        <div className="fortnite">
            <Banner 
                bannerClassName="fortniteBanner"
                title={title}
                subheading={subheading}
                image__left__src={image__left}
                image__right__src={image__right}
                image__left__id= {image__left__id}
            /> 
            <TournamentsSection/>

            <Description title={title}
            para={descriptionText}/>

            <Promo
                text1={bannerText1}
                desc1={bannerDesc1}   
                img1= {image1}  
                text2={bannerText2}
                desc2={bannerDesc2}   
                img2= {image2} 
            />
        </div>
    )
}

export default Fortnite
