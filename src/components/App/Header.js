import React from 'react';

import 'components/App/styles/header.css';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm header-pane'>
                            <h1>TronWatch</h1>
                            <h2>The wallet built for Tron</h2>
                        </div>
                        <div className='col-sm header-pane'>

                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default Header;