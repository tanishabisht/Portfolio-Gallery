import classes from './Slider.module.scss'
import Slider from 'react-touch-drag-slider'
// import Slider from "react-slick";

import img1_1 from '../../Images/1. Hephaestus Cabin Board/File_001.JPG' 
import img1_2 from '../../Images/1. Hephaestus Cabin Board/File_002.JPG' 
import img1_3 from '../../Images/1. Hephaestus Cabin Board/File_003.JPG' 
import img1_4 from '../../Images/1. Hephaestus Cabin Board/File_004.JPG' 
import img1_5 from '../../Images/1. Hephaestus Cabin Board/File_005.JPG' 

const content = [
    {imgs:[
        {url:img1_1, title:'img1'},
        {url:img1_2, title:'img2'},
        {url:img1_3, title:'img3'},
        {url:img1_4, title:'img4'},
        {url:img1_5, title:'img5'}
    ], link:'hephaestus-cabin-board'}
]

const sd = ['sdf', 'sfgfgf', 'kfjgfgf']
  

const SliderComponent = () => {

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
                {content[0].imgs.map(({ url, title }, index) => (
                    <div className={classes.Item}>
                        <img src={url} key={index} alt={title} />
                    </div>
                ))}
            </Slider>
    )
}

export default SliderComponent




