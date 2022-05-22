import React from 'react'
import './home.css';
import phoneImg from '../../assets/phone.png'
import phoneImg2 from '../../assets/phone2.png'
const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home_top_left all_center coln_flex'>
                    <h1>
                        Experience  our
                    </h1>
                    <h1 className='bigger_Font'>
                        Best Quality Music
                    </h1>
                    <h4>
                        change your mood in a single click...
                    </h4>
                    <div className="spacer_01"></div>
                    <div className="all_center">
                        <button className='btn'>Listen</button>
                        <button className='btn'>Listen</button>

                    </div>
                </div>
                <div className='home_top_right'>
                    <picture className='htr_pic all_center'>
                        <img src={phoneImg} alt="" />
                    </picture>
                </div>
            </div>
            <div className='home '>
                <div className="odd_home_box">
                    <div className="spacer_01"></div>
                    <div className="spacer_01"></div>
                    <h1>&#10239;</h1>
                    <h2>The app that can change your life...</h2>
                    <h1>an awesome experience with music</h1>
                    <div className="spacer_01"></div>
                    <div className="spacer_01"></div>

                    <div className="slide_wrapper">
                        <div className=" box box1">
                            <picture className='box_img'>
                                <i className="fa-solid fa-music fa-2x"></i>
                            </picture>
                            <div className="box_txt">
                                <h2>hindi Music</h2>
                                <p className='box_txt_p'>Lorem ipsum, dolorfugit id vel vero molestiae </p>
                            </div>
                            <button className='btn'>Listen</button>
                        </div>
                        <div className="box box2">
                            <picture className='box_img'>
                                <i className="fa-solid fa-headset fa-2x"></i>
                            </picture>
                            <div className="box_txt">
                                <h2>english Music</h2>
                                <p className='box_txt_p'>Lorem ipsum, dolorfugit id vel vero molestiae </p>
                            </div>
                            <button className='btn'>Listen</button>
                        </div>
                        <div className="box box3">
                            <picture className='box_img'>
                                <i className="fa-solid fa-microphone-lines  fa-2x"></i>
                            </picture>
                            <div className="box_txt">
                                <h2>artist choice</h2>
                                <p className='box_txt_p'>Lorem ipsum, dolorfugit id vel vero molestiae </p>
                            </div>
                            <button className='btn'>Listen</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className='home'>
                <div className='home_top_left'>
                    <picture className='htr_pic2 all_center'>
                        <img src={phoneImg2} alt="" />
                    </picture>
                </div>
                <div className='home_top_right all_center  '>
                    <div className="inner_form ">
                        <div className="search_box2 all_center">
                            <i className="fa-brands fa-searchengin"></i>
                            <input type="text" className='search_input2' placeholder='search' />
                        </div>
                        <div className="spacer_01"></div>
                        <h2>Enjoy music in one go...</h2>
                        <h1>Download what you Desire</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque facilis voluptatibus ipsa. Esse quia vitae obcaecati nemo, aspernatur omnis ducimusad!</p>
                        <div className="spacer_01"></div>
                        <h2><i>Sign Up for more</i></h2>
                        <div className="search_box2 all_center">
                            <input type="email" className='search_input2' placeholder='Enter your Email...' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home