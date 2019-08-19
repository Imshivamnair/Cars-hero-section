import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var targetUrl = 'http://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&utm_medium=referral&utm_campaign=ZEEF&utm_source=https%3A%2F%2Fjson-datasets.zeef.com%2Fjdorfman';
        axios.get(proxyUrl + targetUrl, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                }
            })
            .then(res => {
                console.log("res");
                console.log(res.data);
                var newData = res.data.slice(2, res.data.length - 2);
                newData = JSON.parse(newData);
                console.log(newData);
            })
    }
    render() {
        return ( <
            div >
            <
            h1 > Hi < /h1>  <
            p > car models < /p> < /
            div >
        )
    }
}

export default App;