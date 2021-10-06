import { NavLink } from 'react-router-dom'
import classes from './Gallery.module.css'

import final1 from '../../Images/1_hephaestus_cabin_board/File_final.JPG'
import final2 from '../../Images/2_camp_beads/File_final.jpeg'
import final3 from '../../Images/3_kakashi_anbu_mask/File_final.jpeg'
import final4 from '../../Images/4_tobi_mask/File_final.jpeg'
import final5 from '../../Images/5_kunai/File_final.jpeg'
import final6 from '../../Images/6_minato_kunai/File_final.jpeg'
import final7 from '../../Images/7_saiki_mache_painting/File_final.jpeg'
import final8 from '../../Images/8_asuma_chakra_blades/File_final.jpeg'
import final9 from '../../Images/9_yato_shrine/File_final.jpg'
import final10 from '../../Images/10_lostvayne/File_final.jpg'
import final11 from '../../Images/11_nakama/File_final.jpg'
import final12 from '../../Images/12_hanafuda_earrings/File_final.jpg'
import final13 from '../../Images/13_aladdin_keychain/File_final.jpeg'
import final14 from '../../Images/14_zemrow_tow_headband/File_final.jpeg'
import final15 from '../../Images/15_soot_sprite/File_final.jpg'
import final16 from '../../Images/16_saiki_limiters/File_final.JPG'

const content = [
    {img:final1, link:'hephaestus-cabin-board'},
    {img:final2, link:'camp-beads'},
    {img:final3, link:'kakashi-anbu-mask'},
    {img:final4, link:'tobi-mask'},
    {img:final5, link:'kunai'},
    {img:final6, link:'minato-kunai'},
    {img:final7, link:'saiki-mache-painting'},
    {img:final8, link:'asuma-chakra-blades'},
    {img:final9, link:'yato-shrine'},
    {img:final10, link:'lostvayne'},
    {img:final11, link:'nakama'},
    {img:final12, link:'hanafuda-earrings'},
    {img:final13, link:'aladdin-keychain'},
    {img:final14, link:'zemrow-tow-headband'},
    {img:final15, link:'soot-sprite'},
    {img:final16, link:'saiki-limiters'},
]


const Gallery = () => {
    console.log(content)
    return (
        <div className={classes.BodyWrapper}>
            <div className={`container ${classes.Container}`}>
                <h1>krafty_taku</h1>
                <p className={classes.Desc}>YUVIKA BISHT</p>
                <p className={classes.Desc}>if you can’t buy em, make em</p>
                <div className={classes.Gallery}>
                    <div className={`row ${classes.Row}`}>
                        {content.map((data,key) => (
                            <div className="col-sm-12 col-md-4" key={key}>
                                <NavLink className={classes.Item} data-visual-label={data.link} to={data.link}>
                                    <img src={data.img} alt={data.link} />
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery




