import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import styled from 'styled-components';
import NavBrand from './NavBrand';
import MenuIcon from '../../assets/images/icons/menu.svg';
import MenuIconDark from '../../assets/images/icons/menu-dark.svg';

const Header = ({ className }) => {
    const [showNavMenu, setShowNavMenu] = useState(false);
    return (
        <header className={className}>
            <nav>
                <NavBrand />
                <div className="toggler">
                    <button
                        type="button"
                        className="btn-toggler"
                        onClick={() => setShowNavMenu(!showNavMenu)}
                    >
                        <img src={MenuIcon} alt="menu icon" style={{ fill: '#fff' }} />
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

export default styled(Header)`
    width: 100%;

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
