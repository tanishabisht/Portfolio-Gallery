import { useParams } from "react-router-dom";
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Slider.module.scss'
import { Carousel } from 'react-responsive-carousel';

import img1_1 from '../../Images/1_hephaestus_cabin_board/File_001.jpg'
import img1_2 from '../../Images/1_hephaestus_cabin_board/File_002.jpg'
import img1_3 from '../../Images/1_hephaestus_cabin_board/File_003.jpg'
import img1_4 from '../../Images/1_hephaestus_cabin_board/File_004.jpg'
import img1_5 from '../../Images/1_hephaestus_cabin_board/File_005.jpg'

import img2_1 from '../../Images/2_camp_beads/File_001.jpg'
import img2_2 from '../../Images/2_camp_beads/File_001.jpg'
import img2_3 from '../../Images/2_camp_beads/File_003.jpg'
import img2_4 from '../../Images/2_camp_beads/File_004.jpg'
import img2_5 from '../../Images/2_camp_beads/File_005.jpg'
import img2_6 from '../../Images/2_camp_beads/File_006.jpg'
import img2_7 from '../../Images/2_camp_beads/File_007.jpg'
import img2_8 from '../../Images/2_camp_beads/File_008.jpg'

import img3_1 from '../../Images/3_kakashi_anbu_mask/File_001.jpg'
import img3_2 from '../../Images/3_kakashi_anbu_mask/File_002.jpg'

import img4_1 from '../../Images/4_tobi_mask/File_001.jpg'
import img4_2 from '../../Images/4_tobi_mask/File_002.jpg'

import img5_1 from '../../Images/5_kunai/File_001.jpg'
import img5_2 from '../../Images/5_kunai/File_002.jpg'

import img6_1 from '../../Images/6_minato_kunai/File_001.jpg'

import img7_1 from '../../Images/7_saiki_mache_painting/File_001.jpg'

import img8_1 from '../../Images/8_asuma_chakra_blades/File_001.jpg'
import img8_2 from '../../Images/8_asuma_chakra_blades/File_002.jpg'

import img9_1 from '../../Images/9_yato_shrine/File_000.jpg'
import img9_2 from '../../Images/9_yato_shrine/File_001.jpg'
import img9_3 from '../../Images/9_yato_shrine/File_002.jpg'
import img9_4 from '../../Images/9_yato_shrine/File_003.jpg'
import img9_5 from '../../Images/9_yato_shrine/File_004.jpg'
import img9_6 from '../../Images/9_yato_shrine/File_005.jpg'
import img9_7 from '../../Images/9_yato_shrine/File_006.jpg'

import img10_1 from '../../Images/10_lostvayne/File_000.jpg'
import img10_2 from '../../Images/10_lostvayne/File_001.jpg'
import img10_3 from '../../Images/10_lostvayne/File_002.jpg'
import img10_4 from '../../Images/10_lostvayne/File_003.jpg'

import img11_1 from '../../Images/11_nakama/File_000.jpg'
import img11_2 from '../../Images/11_nakama/File_001.jpg'
import img11_3 from '../../Images/11_nakama/File_002.jpg'
import img11_4 from '../../Images/11_nakama/File_003.jpg'

import img12_1 from '../../Images/12_hanafuda_earrings/File_001.jpg'
import img12_2 from '../../Images/12_hanafuda_earrings/File_002.jpg'
import img12_3 from '../../Images/12_hanafuda_earrings/File_003.jpg'

import img13_1 from '../../Images/13_aladdin_keychain/File_000.jpg'
import img13_2 from '../../Images/13_aladdin_keychain/File_001.jpg'
import img13_3 from '../../Images/13_aladdin_keychain/File_002.jpg'
import img13_4 from '../../Images/13_aladdin_keychain/File_003.jpg'
import img13_5 from '../../Images/13_aladdin_keychain/File_004.jpg'

import img14_1 from '../../Images/14_zemrow_tow_headband/File_000.jpg'
import img14_2 from '../../Images/14_zemrow_tow_headband/File_001.jpg'
import img14_3 from '../../Images/14_zemrow_tow_headband/File_002.jpg'
import img14_4 from '../../Images/14_zemrow_tow_headband/File_003.jpg'
import img14_5 from '../../Images/14_zemrow_tow_headband/File_004.jpg'
import img14_6 from '../../Images/14_zemrow_tow_headband/File_005.jpg'
import img14_7 from '../../Images/14_zemrow_tow_headband/File_006.jpg'
import img14_8 from '../../Images/14_zemrow_tow_headband/File_007.jpg'

import img15_1 from '../../Images/15_soot_sprite/File_001.jpg'
import img15_2 from '../../Images/15_soot_sprite/File_002.jpg'
import img15_3 from '../../Images/15_soot_sprite/File_003.jpg'

import img16_1 from '../../Images/16_saiki_limiters/File_000.jpg'
import img16_2 from '../../Images/16_saiki_limiters/File_001.jpg'
import img16_3 from '../../Images/16_saiki_limiters/File_002.jpg'

import img17_1 from '../../Images/17_big_daddy_sunshine_rhitta/File_000.jpg'
import img17_2 from '../../Images/17_big_daddy_sunshine_rhitta/File_001.jpg'
import img17_3 from '../../Images/17_big_daddy_sunshine_rhitta/File_002.jpg'
import img17_4 from '../../Images/17_big_daddy_sunshine_rhitta/File_003.jpg'
import img17_5 from '../../Images/17_big_daddy_sunshine_rhitta/File_004.jpg'
import img17_6 from '../../Images/17_big_daddy_sunshine_rhitta/File_005.jpg'

import img18_1 from '../../Images/18_rimuru_cushion/File_000.jpg'
import img18_2 from '../../Images/18_rimuru_cushion/File_001.jpg'


const content = [
    {link:'hephaestus-cabin-board', imgs:[img1_1, img1_2, img1_3, img1_4, img1_5]},
    {link:'camp-beads', imgs:[img2_1, img2_2, img2_3, img2_4, img2_5, img2_6, img2_7, img2_8]},
    {link:'kakashi-anbu-mask', imgs:[img3_1, img3_2]},
    {link:'tobi-mask', imgs:[img4_1, img4_2]},
    {link:'kunai', imgs:[img5_1, img5_2]},
    {link:'minato-kunai', imgs:[img6_1]},
    {link:'saiki-mache-painting', imgs:[img7_1]},
    {link:'asuma-chakra-blades', imgs:[img8_1, img8_2]},
    {link:'yato-shrine', imgs:[img9_1, img9_2, img9_3, img9_4, img9_5, img9_6, img9_7]},
    {link:'lostvayne', imgs:[img10_1, img10_2, img10_3, img10_4]},
    {link:'nakama', imgs:[img11_1, img11_2, img11_3, img11_4]},
    {link:'hanafuda-earrings', imgs:[img12_1, img12_2, img12_3]},
    {link:'aladdin-keychain', imgs:[img13_1, img13_2, img13_3, img13_4, img13_5]},
    {link:'zemrow-tow-headband', imgs:[img14_1, img14_2, img14_3, img14_4, img14_5, img14_6, img14_7, img14_8]},
    {link:'soot-sprite', imgs:[img15_1, img15_2, img15_3]},
    {link:'saiki-limiters', imgs:[img16_1, img16_2, img16_3]},
    {link:'big-daddy-sunshine-rhitta', imgs:[img17_1, img17_2, img17_3, img17_4, img17_5, img17_6]},
    {link:'rimuru-cushion', imgs:[img18_1, img18_2]}
]


const SliderComponent = () => {

    const { name } = useParams();
    const data = content.find(el => el.link === name)

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