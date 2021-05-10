import React from 'react'
import Banner from './Banner';
import Description from './Description';
import descriptionText from './descriptionTextFortnite';
import Navbar from './Navbar';
import Promo from './Promo';
import TournamentsSection from './TournamentsSection';
import  './styles/components/NHL.css'

function NHL() {
    const title="NHL 21"
    const subheading="Play .Win Rewards .Dominate"
    const image__left="https://i.ibb.co/1ZXzxjp/nhlLeft.png"
    //const image__left="https://i.ibb.co/dk8tQkB/nhl-Banner-Left.png"
    //const image__right="https://i.ibb.co/Khm2NXj/image-31.png"
    const image__right="https://i.ibb.co/Khm2NXj/image-31.png"

    const image__left__id="nhl__left"
    const image__right__id="nhl__right"

    const bannerText1="Win Rewards"
    const bannerDesc1="Level up your gaming, always something new to discover. Best part, Win rewards while having fun!"
    const image1= "https://i.ibb.co/VBsqMty/Group-9.png"
    const image1__id="nhlpromo1"
    const image2__id="nhlpromo2"
    const bannerText2="Join Teams"
    const bannerDesc2="Welcome to the Gamerz Fam, where gamerz are more than just a tag. "
    const image2="https://i.ibb.co/pyVtfG8/nhl2image.png"
   

    return (
        <div className="nhl">
            <Banner
                bannerClassName="nhlBanner"
                title={title}
                subheading={subheading}
                image__left__src={image__left}
                image__left__id={image__left__id}
                image__right__id={image__right__id}
                image__right__src={image__right}
            /> 
            <TournamentsSection/>

            <Description title={title}
            para={descriptionText}/>

            <Promo
                text1={bannerText1}
                desc1={bannerDesc1}   
                img1= {image1} 
                img1__id="nhlpromo1"
                img2__id={image2__id} 

                text2={bannerText2}
                desc2={bannerDesc2}   
                img2= {image2} 
            />

            
        </div>
    )
}

export default NHL
