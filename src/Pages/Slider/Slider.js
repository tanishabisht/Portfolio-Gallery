import { useParams } from "react-router-dom";

import classes from './Slider.module.scss'
import Slider from 'react-touch-drag-slider'

import img1_1 from '../../Images/1. Hephaestus Cabin Board/File_001.JPG' 
import img1_2 from '../../Images/1. Hephaestus Cabin Board/File_002.JPG' 
import img1_3 from '../../Images/1. Hephaestus Cabin Board/File_003.JPG' 
import img1_4 from '../../Images/1. Hephaestus Cabin Board/File_004.JPG' 
import img1_5 from '../../Images/1. Hephaestus Cabin Board/File_005.JPG'

import img2_1 from '../../Images/2. Camp Beads/File_001.jpeg'
import img2_2 from '../../Images/2. Camp Beads/File_002.jpeg'
import img2_3 from '../../Images/2. Camp Beads/File_003.jpeg'
import img2_4 from '../../Images/2. Camp Beads/File_004.jpeg'
import img2_5 from '../../Images/2. Camp Beads/File_005.jpeg'
import img2_6 from '../../Images/2. Camp Beads/File_006.jpeg'
import img2_7 from '../../Images/2. Camp Beads/File_007.jpeg'
import img2_8 from '../../Images/2. Camp Beads/File_008.jpeg'

import img3_1 from '../../Images/3. Kakashi_s Anbu Mask/File_001.jpeg'
import img3_2 from '../../Images/3. Kakashi_s Anbu Mask/File_002.jpeg'

import img4_1 from '../../Images/4. Tobi_s Mask/File_001.jpeg'
import img4_2 from '../../Images/4. Tobi_s Mask/File_002.jpeg'

import img5_1 from '../../Images/5. Kunai/File_001.jpeg'
import img5_2 from '../../Images/5. Kunai/File_002.jpeg'

import img6_1 from '../../Images/6. Minato_s Kunai/File_001.jpeg'

import img7_1 from '../../Images/7. Saiki Mache Painting/File_001.jpeg'

import img8_1 from '../../Images/8. Asuma_s Chakra Blades/File_000.jpeg'
import img8_2 from '../../Images/8. Asuma_s Chakra Blades/File_001.jpeg'
import img8_3 from '../../Images/8. Asuma_s Chakra Blades/File_002.jpeg'

import img9_1 from '../../Images/9. Yato_s Shrine/File_000.jpeg'
import img9_2 from '../../Images/9. Yato_s Shrine/File_001.jpeg'
import img9_3 from '../../Images/9. Yato_s Shrine/File_002.jpeg'
import img9_4 from '../../Images/9. Yato_s Shrine/File_003.jpeg'
import img9_5 from '../../Images/9. Yato_s Shrine/File_004.jpeg'
import img9_6 from '../../Images/9. Yato_s Shrine/File_005.jpg'
import img9_7 from '../../Images/9. Yato_s Shrine/File_006.jpg'



const content = [
    {link:'hephaestus-cabin-board', imgs:[img1_1, img1_2, img1_3, img1_4, img1_5]},
    {link:'camp-beads', imgs:[img2_1, img2_2, img2_3, img2_4, img2_5, img2_6, img2_7, img2_8]},
    {link:'kakashi-anbu-mask', imgs:[img3_1, img3_2]},
    {link:'tobi-mask', imgs:[img4_1, img4_2]},
    {link:'kunai', imgs:[img5_1, img5_2]},
    {link:'minato-kunai', imgs:[img6_1]},
    {link:'saiki-mache-painting', imgs:[img7_1]},
    {link:'asuma-chakra-blades', imgs:[img8_1, img8_2, img8_3]},
    {link:'yato-shrine', imgs:[img9_1, img9_2, img9_3, img9_4, img9_5, img9_6, img9_7]},
    {link:'lostvayne', imgs:[]},
    {link:'nakama', imgs:[]},
    {link:'hanafuda-earrings', imgs:[]},
    {link:'aladdin-keychain', imgs:[]},
    {link:'zemrow-tow-headband', imgs:[]},
    {link:'soot-sprite', imgs:[]},
    {link:'saiki-limiters', imgs:[]}
]

const SliderComponent = () => {

    const { name } = useParams();
    console.log(name)

    const data = content.find(el => el.link === name)

    return (

            <Slider
                onSlideComplete={(i) => {
                    console.log('finished dragging, current slide is', i)
                }}
                onSlideStart={(i) => {
                    console.log('started dragging on slide', i)
                }}
                activeIndex={0}
                threshHold={100}
                transition={0.5}
                scaleOnDrag={true} >
                {data.imgs.map((pic, index) => (
                    <div className={classes.Item} key={index}>
                        <img src={pic} alt='title' />
                    </div>
                ))}
            </Slider>
    )
}

export default SliderComponent




