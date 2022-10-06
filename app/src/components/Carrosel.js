import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src="https://i0.wp.com/asianbreak.com.br/wp-content/uploads/2022/01/capa-chihiro.jpg?fit=1200%2C675&ssl=1" />
        </div>
        <div>
          <img src="https://deerfieldlibrary.org/wp-content/uploads/2021/04/Ghibli-choose-your-own-story-blog.png" />
        </div>
        <div>
          <img src="https://cupulatrovao.com.br/wp-content/uploads/2020/01/O-Mundo-dos-Pequeninos-capa-not%C3%ADcia-do-Ghibli.jpg" />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
