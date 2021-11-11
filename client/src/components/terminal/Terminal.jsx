import React, { useState } from 'react';
import './style.css';

const Terminal = props => {
    const [response, setResponse] = useState('');

    return (
        <div className='apps terminal'>
            <section>
                <p>Terminal</p>
                <button onClick={() => props.onClick('terminal')}>X</button>
            </section>
            <section>
                <section>
                    <small>root@username: </small>
                    <span>~$</span><input type='text' />
                </section>
                <p>{response}</p>
            </section>
        </div>
    );
}

export default Terminal;