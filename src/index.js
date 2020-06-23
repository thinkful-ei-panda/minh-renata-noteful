import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PageMain from './PageMain';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render( 
<React.StrictMode> 
    <BrowserRouter> 
        <PageMain /> 
    </BrowserRouter> 
</React.StrictMode>, 
document.getElementById('root') );

