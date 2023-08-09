import React from 'react';
import './InnerPages.css';
import { Link } from 'react-router-dom';

const WhatIsFunction = () => {
    return (
        <div className='function'>
            <div className='content'>
                <div className='side_bar'>
                    <Link className='link' to={'/js'}><div>What is JavaScript ?</div></Link>
                    <Link className='link' to={'/closure'}><div>What is Closure ?</div></Link>
                    <Link className='link'><div>What is Function ?</div></Link>
                    <Link className='link' to={'/variables'}><div>What are Variables ?</div></Link>
                    <Link className='link' to={'/hoisting'}><div>What is Hoisting ?</div></Link>
                </div>
                <div className='inner_content4'>
                    <h2>What is Function</h2><hr />
                    <p>
                        A function is a group of reusable code which can be called anywhere in your program. This
                        eliminates the need of writing the same code again and again. It helps programmers in writing
                        modular codes. Functions allow a programmer to divide a big program into a number of small and
                        manageable functions.<br />
                    </p>
                    <p>
                        Like any other advanced programming language, JavaScript also supports all the features
                        necessary to write modular code using functions. You must have seen functions like alert and
                        write in the earlier chapters. We were using these functions again and again, but they had been
                        written in core JavaScript only once.
                    </p>
                    <p>
                        Before we use a function, we need to define it. The most common way to define a function in
                        JavaScript is by using the function keyword, followed by a unique function name, a list of
                        parameters thatmightbeempty, and a statement block surrounded by curly braces.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatIsFunction;