import React from 'react'
import "./StoryReel.css";
import Story from './Story';
function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://i.pinimg.com/originals/6a/a2/d2/6aa2d271a6e16553de149db0f64a7e62.png"
            profileSrc="https://stickershop.line-scdn.net/stickershop/v1/product/718/LINEStorePC/main.png;compress=true"
            title="Nancy"
            />
            <Story 
            image="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/image8-310x591.jpg"
            profileSrc="https://stickershop.line-scdn.net/stickershop/v1/product/3312/LINEStorePC/main.png;compress=true"
            title="Shivani"
            />
            <Story 
            image="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/make-an-instagram-story-templates/iphone-xs-mockup-22485.png"
            profileSrc="https://vignette.wikia.nocookie.net/shinchan/images/7/73/575342-shin_chan_14_xlarger_large.jpg/revision/latest/scale-to-width-down/340?cb=20091010101718"
            title="Karishma"
            />
            <Story 
            image="https://i.insider.com/5df00e7efd9db258ef3e2204?width=750&format=jpeg&auto=webp"
            profileSrc="https://i.pinimg.com/originals/14/fc/03/14fc030a45875ea3021063e18d433ea5.png"
            title="Apoorva"
            />
            <Story 
            image="https://thepreviewapp.com/wp-content/uploads/2020/01/instagram-sizes-instagram-story.jpg"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT21Z3yUZvG4ke8_pF7vMwm-3fDC2lTGgy1aw&usqp=CAU"
            title="Aakrati"
            />
            <Story 
            image="https://i.pinimg.com/originals/34/ae/3d/34ae3daed83e6b9bff6bcb9d6b650cac.jpg"
            profileSrc="https://www.nintendo.com/content/dam/noa/en_US/games/switch/c/crayon-shinchan-the-storm-called-flaming-kasukabe-runner-switch/Switch_Crayon_desc_char.png"
            title="Anchu"
            />

        </div>
    )
}

export default StoryReel
