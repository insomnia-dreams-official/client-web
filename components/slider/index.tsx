import React, {Component} from 'react';
import Slider from "react-slick";
import theme from "../../styles/theme";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default class extends Component {
    render() {
        return (
            <div className="slider-container">
                        <Slider {...settings}>
                    <div>
                        <img src="/slider/2.jpg" alt="*"/>
                    </div>
                    <div>
                        <img src="/slider/3.jpg" alt="*"/>
                    </div>
                </Slider>

                <style jsx>{`
                    .slider-container {
                        margin-top: ${theme.space[1]}px;
                    }
                    img {
                        border-radius: ${theme.radii[2]};
                    }
                `}</style>
            </div>
        );
    }
}

