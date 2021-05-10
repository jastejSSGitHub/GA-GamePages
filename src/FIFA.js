import React from 'react'
import Banner from './Banner';
import Description from './Description';
import descriptionText from './descriptionTextFortnite';
import Navbar from './Navbar';
import Promo from './Promo';
import TournamentsSection from './TournamentsSection';
import  './styles/components/NHL.css'

function FIFA() {
    const title="FIFA 21"
    const subheading="Play .Win Rewards .Dominate"
    const image__left="https://i.ibb.co/5LrqVkK/fifa-Left-Banner.png"
    const image__right="https://i.ibb.co/8MjVc9s/fifa-Bnner-Right.png"
    const image__left__id="fifa__left"
    const image__right__id="fifa__right"

    const bannerText1="Win Rewards"
    const bannerDesc1="Level up your gaming, always something new to discover. Best part, Win rewards while having fun!"
    const image1= "https://i.ibb.co/0rkmCHB/fifa-Promo1.png"

    const image1__id="fifapromo1"
    const image2__id="fifapromo2"
    const bannerText2="Join Teams"
    const bannerDesc2="Welcome to the Gamerz Fam, where gamerz are more than just a tag. "
    const image2="https://i.ibb.co/ckTmK4J/fifa-Promo2.png"
    return (
        <div className="fifa">
            <Banner
                bannerClassName="fifaBanner"
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
                img1__id={image1__id}
                img2__id={image2__id} 

                text2={bannerText2}
                desc2={bannerDesc2}   
                img2= {image2} 
            />
        </div>
    )
}

export default FIFA
