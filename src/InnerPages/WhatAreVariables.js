import React from 'react';
import './InnerPages.css';
import { Link } from 'react-router-dom';

const WhatAreVariables = () => {
    return (
        <div className='variables'>
            <div className='content'>
                <div className='side_bar'>
                    <Link className='link' to={'/js'}><div>What is JavaScript ?</div></Link>
                    <Link className='link' to={'/closure'}><div>What is Closure ?</div></Link>
                    <Link className='link' to={'/function'}><div>What is Function ?</div></Link>
                    <Link className='link'><div>What are Variables ?</div></Link>
                    <Link className='link' to={'/hoisting'}><div>What is Hoisting ?</div></Link>
                </div>
                <div className='inner_content3'>
                    <h2>JavaScript Datatypes</h2><hr />
                    <p>
                        One of the most fundamental characteristics of a programming language is the set of data types it
                        supports. These are the type of values that can be represented and manipulated in a
                        programming language.
                    </p>
                    <p>
                        JavaScript allows you to work with three primitive data types −<br />
                        Numbers, eg. 123, 120.50 etc.<br />
                        Strings of text, e.g. "This text string" etc.<br />
                        Boolean, e.g. true or false.<br />
                    </p>
                    <p>
                        JavaScript also defines two trivial data types, null and undefined, each of which defines only a
                        single value. In addition to these primitive data types, JavaScript supports a composite data type
                        known as object. We will cover objects in detail in a separate chapter.
                    </p>
                    <h2>JavaScript Variables</h2><hr />
                    <p>
                        Like many other programming languages, JavaScript has variables. Variables can be thought of as
                        named containers. You can place data into these containers and then refer to the data simply by
                        naming the container.
                    </p>
                    <h2>JavaScript Variable Scope</h2><hr />
                    <p>
                        The scope of a variable is the region of your program in which it is defined. JavaScript variables
                        have only two scopes.<br />
                        Global Variables − A global variable has global scope which means it can be defined
                        anywhere in your JavaScript code.<br />
                        Local Variables − A local variable will be visible only within a function where it is defined.
                        Function parameters are always local to that function.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatAreVariables;