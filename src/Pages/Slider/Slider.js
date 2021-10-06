import { useParams } from "react-router-dom";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Slider.module.scss'
import { Carousel } from 'react-responsive-carousel';

import img1_1 from '../../Images/1_hephaestus_cabin_board/File_001.JPG'
import img1_2 from '../../Images/1_hephaestus_cabin_board/File_002.JPG'
import img1_3 from '../../Images/1_hephaestus_cabin_board/File_003.JPG'
import img1_4 from '../../Images/1_hephaestus_cabin_board/File_004.JPG'
import img1_5 from '../../Images/1_hephaestus_cabin_board/File_005.JPG'

import img2_1 from '../../Images/2_camp_beads/File_001.jpeg'
import img2_2 from '../../Images/2_camp_beads/File_001.jpeg'
import img2_3 from '../../Images/2_camp_beads/File_003.jpeg'
import img2_4 from '../../Images/2_camp_beads/File_004.jpeg'
import img2_5 from '../../Images/2_camp_beads/File_005.jpeg'
import img2_6 from '../../Images/2_camp_beads/File_006.jpeg'
import img2_7 from '../../Images/2_camp_beads/File_007.jpeg'
import img2_8 from '../../Images/2_camp_beads/File_008.jpeg'

import img3_1 from '../../Images/3_kakashi_anbu_mask/File_001.jpeg'
import img3_2 from '../../Images/3_kakashi_anbu_mask/File_002.jpeg'

import img4_1 from '../../Images/4_tobi_mask/File_001.jpeg'
import img4_2 from '../../Images/4_tobi_mask/File_002.jpeg'

import img5_1 from '../../Images/5_kunai/File_001.jpeg'
import img5_2 from '../../Images/5_kunai/File_002.jpeg'

import img6_1 from '../../Images/6_minato_kunai/File_001.jpeg'

import img7_1 from '../../Images/7_saiki_mache_painting/File_001.jpeg'

import img8_1 from '../../Images/8_asuma_chakra_blades/File_000.jpeg'
import img8_2 from '../../Images/8_asuma_chakra_blades/File_001.jpeg'
import img8_3 from '../../Images/8_asuma_chakra_blades/File_002.jpeg'

import img9_1 from '../../Images/9_yato_shrine/File_000.jpeg'
import img9_2 from '../../Images/9_yato_shrine/File_001.jpeg'
import img9_3 from '../../Images/9_yato_shrine/File_002.jpeg'
import img9_4 from '../../Images/9_yato_shrine/File_003.jpeg'
import img9_5 from '../../Images/9_yato_shrine/File_004.jpeg'
import img9_6 from '../../Images/9_yato_shrine/File_005.jpg'
import img9_7 from '../../Images/9_yato_shrine/File_006.jpg'


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
    console.log(data)

    return (
        <div className={classes.BodyWrapper}>
            <div className={classes.Container}>
                <Carousel>
                    {data.imgs.map((pic, index) => (
                        <div key={index}>
                            <img src={pic} alt='title' />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}


export default SliderComponent