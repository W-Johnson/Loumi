import React from "react";
import Card from './components/Card'
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image';

class App extends React.Component {
    state = {
        data: []
    }
    myRef = React.createRef();

    getData = async () => {
        const res = await fetch('data.json');
        const data = await res.json();
        this.setState({data: data});
    }

    componentDidMount() {
        this.getData();
    }


    render() {
        const properties = {
            autoplay: false,
            prevArrow: <div style={{position: "absolute",width: "30px", left: "300px", top: "350px"}}><img src="images/prev.png" alt=""/></div>,
            nextArrow: <div style={{position: "absolute", width: "30px", right: "300px", top: "350px"}}><img src="images/next.png" alt=""/></div>,
            infinite: true,
            easing: "ease",
        };
        const data = this.state.data;
        var idx = 0;
        return (
            <div>

                <div>

                    <div>
                        <Slide ref={this.myRef} {...properties}>
                            {
                                data.map(() => (
                                    <div className="each-slide">
                                        <div className="first"><Card item={data[idx++ % data.length]}/></div>
                                        <div className="second"><Card item={data[idx++ % data.length]}/></div>
                                        <div className="third"><Card item={data[idx++ % data.length]}/></div>
                                    </div>
                                ))}
                        </Slide>
                    </div>
                </div>


            </div>
        );
    };
}

export default App;
