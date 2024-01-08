import React from 'react'
import './SinglePage.css'
import profile from './Images/IMG-20210815-WA0036.jpg';
const SinglePage = () => {
    return (
        <div>

            <header id="body-header">
                <nav>
                    <ul className='horizontal-list text-center nav-menu'>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>

                <div id="name-social-container">
                    <div className='text-center'>
                        <h1 id='my-name'>Aditya Keshri</h1>
                    </div>
                    <div>
                        <ul className='horizontal-list text-center social-icons'>
                            <li><a href="https://www.gmail.com" target='blank'><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://www.gmail.com" target='blank'><i class="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.gmail.com" target='blank'><i class="fa-solid fa-envelope"></i></a></li>
                            <li><a href="https://www.gmail.com" target='blank'><i class="fa-brands fa-stack-overflow"></i></a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <main>
                <section id="about">
                    <div id="my-image">
                        <img src={profile} alt="bnr" />
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis voluptas <span>dignissimos</span> exercitationem ex necessitatibus suscipit debitis <span>impedit,</span> perspiciatis aspernatur, iure dolorum saepe animi labore ut totam placeat ducimus in nostrum <span>consequuntur.</span> Quod dolore a iusto eaque <span>eveniet cum</span>, iste voluptatum?</p>
                </section>



                <section id="skills">Skills</section>
                <section id="experience">Experience</section>
                <section id="projects">Projects</section>
            </main>
            <section id="contact">Contact
                <li><a href="#"><i class="fa-solid fa-up-long"></i></a></li>
            </section>
        </div>
    )
}

export default SinglePage