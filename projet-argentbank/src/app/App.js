import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Index from '../pages/indexpage';
import Header from '../components/header';
import Headerstyle from '../styles/headerstyle';
import Footer from '../components/footer';
import Footerstyle from '../styles/footerstyle';

/**
 * Create routes for differents components of the site
 * 
 * @class
 * @this {App}
 * @param {id} id of the user
 */

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Header/><Headerstyle/>
                <Routes>
                    <Route exact path="/" element={<Index/>}/>
                </Routes>
                <Footer/><Footerstyle/>
            </BrowserRouter>
        )
    }
}