import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import styled from 'styled-components';

import MenuIconDark from '../../../assets/images/icons/menu-dark.svg';

const Nav = ({ className }) => {
    const [showNavMenu, setShowNavMenu] = useState(false);
    return (
        <header className={className}>
            <nav>
                <div className="nav-brand">
                    <h3>newsHuub</h3>
                </div>
                <div className="toggler">
                    <button
                        type="button"
                        className="btn-toggler"
                        onClick={() => setShowNavMenu(!showNavMenu)}
                    >
                        <img src={MenuIconDark} alt="menu icon" />
                    </button>
                </div>
                {showNavMenu && (
                    <div className="navbar">
                        <div className="toggler">
                            <button
                                type="button"
                                className=""
                                onClick={() => setShowNavMenu(false)}
                            >
                                <img src={MenuIconDark} alt="menu icon" />
                            </button>
                        </div>
                        <ul className="nav-menu">
                            <li className="nav-menu-item">
                                <Link to="/topics">Topics</Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to="/sources">Sources</Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="nav-menu-item">
                                <Link to="/register">Create an Account</Link>
                            </li>
                        </ul>
                        <div className="nav-footer">
                            <ul>
                                <li>
                                    <a href="https://facebook.com">
                                        <AiFillFacebook style={{ fontSize: '1.8rem' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com">
                                        <AiFillTwitterCircle style={{ fontSize: '1.8rem' }} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com">
                                        <AiFillInstagram style={{ fontSize: '1.8rem' }} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default styled(Nav)`
    background: transparent;

    width: 100%;
    z-index: 1000;
    .nav-brand {
        h3 {
            color: #436680;
            font-weight: bold;
            font-size: 24px;
            letter-spacing: -1.5px;
        }
    }
    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 2rem;
    }
    .btn-toggler {
        background: transparent;
        border: none;
        padding: 0.5rem;
        cursor: pointer;
        img {
            width: 40px;
            height: 40px;
        }
    }
    .navbar {
        background: #f9f9f9;
        position: absolute;
        z-index: 1000;
        right: 0;
        border: 8px solid #000;
        width: 50vh;
        top: 0;
        height: 100vh;
        box-shadow: -8px 0px 10px -8px rgba(0, 0, 0, 0.75);
        .nav-footer {
            position: absolute;
            bottom: 0;
            ul {
                display: flex;
                list-style: none;

                li {
                    padding: 0.3rem 1rem;
                    a {
                        color: #000;
                    }
                }
            }
        }
        .toggler {
            text-align: right;
            padding: 1rem;
            button {
                padding: 0.4rem;
                background: transparent;
                border: none;
                cursor: pointer;

                img {
                    width: 40px;
                }
                &:hover {
                    img {
                        width: 43px;
                    }
                }
            }
        }
        .nav-menu {
            margin-top: 2rem;
        }
        .nav-menu-item {
            list-style: none;
            padding: 0.4rem 1rem;
            cursor: pointer;
            a {
                color: #000;
                font-size: 32px;
                letter-spacing: -1px;
                font-weight: 700;
                // text-transform: uppercase;
            }
            &:hover {
                background: #000;
                a {
                    color: #fff;
                }
            }
        }
    }
`;
