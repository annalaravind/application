import React from 'react';
import './InnerPages.css';
import { Link } from 'react-router-dom';

const WhatIsClosure = () => {
    return (
        <div className='closure'>
            <div className='content'>
                <div className='side_bar'>
                    <Link className='link' to={'/js'}><div>What is JavaScript ?</div></Link>
                    <Link className='link'><div>What is Closure ?</div></Link>
                    <Link className='link' to={'/function'}><div>What is Function ?</div></Link>
                    <Link className='link' to={'/variables'}><div>What are Variables ?</div></Link>
                    <Link className='link' to={'/hoisting'}><div>What is Hoisting ?</div></Link>
                </div>
                <div className='inner_content2'>
                    <h2>Introducing Scope in JavaScript</h2><hr />
                    <p>
                        Scope is the first piece that will help us understand the previous example.
                        A variable’s scope is the part of a program where it is available for use.<br />
                        JavaScript variables are lexically scoped, meaning that we can determine a
                        variable’s scope from where it is declared in the source code. (This is not entirely
                        true: var variables are not lexically scoped, but we will discuss that shortly.)
                    </p>
                    <h2>Nested Scopes and Functions</h2><hr />
                    <p>
                        JavaScript allows nested blocks and therefore nested scopes. Nested scopes create a scope tree or scope chain.
                    </p>
                    <h2>Scope of let, const, and var in JavaScript</h2><hr />
                    <p>
                        We can create variables with the let, const, and var declarations. For let and const, block scoping
                        works as explained above. However, var behaves differently.
                    </p>
                    <h3 style={{ textDecoration: 'underline' }}>let and const: </h3>
                    <p>
                        let and const create block-scoped variables. When declared within a block, they are only accessible within that block
                    </p>
                    <h3 style={{ textDecoration: 'underline' }}>var: </h3>
                    <p>
                        Variables created with var are scoped to their nearest function or the global scope
                        (which we will discuss shortly). They are not block scoped
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatIsClosure;