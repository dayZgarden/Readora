import React from 'react';
import { Link } from 'react-router-dom';
import BookIcon from '../../books.svg'

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>
                            America's most awarded online library platform
                        </h1>
                        <h2>Find your dream book with <span className="purple">Library</span></h2>
                        <Link to="#features">
                            <button className="btn">Browse books</button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={BookIcon} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
