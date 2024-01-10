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
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
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



                <section id="skills">
                    <h1 className='section-heading mb75px'>
                        <span><i class="fa-solid fa-chalkboard-user"></i></span>
                        <span>SKILLS</span>
                    </h1>

                    <div className="skills-display">
                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-blue">
                                <div className="skill-name">
                                    <span>HTML 5</span>
                                </div>
                            </div>
                        </div>

                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-orange">
                                <div className="skill-name">
                                    <span>CSS</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-green">
                                <div className="skill-name">
                                    <span>JavsScript</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-brown">
                                <div className="skill-name">
                                    <span>React.js</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-yellow">
                                <div className="skill-name">
                                    <span>Redux</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-blue">
                                <div className="skill-name">
                                    <span>Responsive Design</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-brown">
                                <div className="skill-name">
                                    <span>Web development</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-orange">
                                <div className="skill-name">
                                    <span>Tailwind CSS</span>
                                </div>
                            </div>
                        </div>
                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-green">
                                <div className="skill-name">
                                    <span>Git</span>
                                </div>
                            </div>
                        </div>

                        <div className='skill-progress'>
                            <div className="eighty-five-percent mb-yellow">
                                <div className="skill-name">
                                    <span>JSX</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>


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