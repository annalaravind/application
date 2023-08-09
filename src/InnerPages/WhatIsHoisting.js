import React from 'react';
import './InnerPages.css';
import { Link } from 'react-router-dom';

const WhatIsHoisting = () => {
    return (
        <div className='hoisting'>
            <div className='content'>
                <div className='side_bar'>
                    <Link className='link' to={'/js'}><div>What is JavaScript ?</div></Link>
                    <Link className='link' to={'/closure'}><div>What is Closure ?</div></Link>
                    <Link className='link' to={'/function'}><div>What is Function ?</div></Link>
                    <Link className='link' to={'/variables'}><div>What are Variables ?</div></Link>
                    <Link className='link'><div>What is Hoisting ?</div></Link>
                </div>
                <div className='inner_content5'>
                    <h2>What is hoisting in JavaScript?</h2><hr />
                    <p>
                        As we all know, the variable declaration is one of the basic and
                        essential aspects of any programming language such as C language,
                        C++, etc. However, JavaScript has a small odd, known as Hoisting,
                        which can turn a flawless-looking declaration into a subtle bug.
                    </p>
                    <h2>Hoisting</h2><hr />
                    <p>
                        In JavaScript, Hoisting is a kind of default behavior in which all the
                        declarations either variable declaration or function declaration are
                        moved at the top of the scope just before executing the program's code.
                        However, it can be considered an advantage because all functions and variable
                        declarations are placed to the top of their scope no matter where they are
                        all declared anywhere in the whole program, even regardless of whether they
                        are declared global or local.<br /><br />
                        In simple words, we can say that we can use the variables and functions
                        in JavaScript before declaring them because as we discussed above JavaScript
                        compiler moves the declarations of all the variables and functions at the top
                        of their scope so that there will not be an error of any kind. The concept
                        of JavaScript of moving all declarations of the variables and functions to
                        the top of their scope by compiler itself just before the execution of code
                        is known as Hoisting.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatIsHoisting;