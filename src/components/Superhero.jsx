import React from 'react'

import superman from '../assets/images/superhero/superman.jpg'
import batman from '../assets/images/superhero/batman.jpg'
import antman from '../assets/images/superhero/antman.jpg'
import avenger from '../assets/images/superhero/avenger.jpg'
import robin from '../assets/images/superhero/robinhood.jpg'
import spiderman from '../assets/images/superhero/spiderman-cover.jpg'


function Tranding() {
    return (
        <div className='Superhero container-fluid'id='superhero'>
            <div className="container p-3 text-light text-center">
                <h1>Superhero</h1>
                <br />
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-md-12">
                        <div class="card">
                            <img src={avenger} class="card-img-top" />
                            <div class="card-body bg-transparen">
                                <h5 class="card-title">MARVEL Avenger ENDGame</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-md-12">
                        <div class="card">
                            <img src={robin} class="card-img-top" style={{height:"520px"}} />
                            <div class="card-body bg-transparen">
                                <h5 class="card-title">Robin hood</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-md-12">
                        <div class="card">
                            <img src={spiderman} class="card-img-top" />
                            <div class="card-body bg-transparen">
                                <h5 class="card-title">Spiderman On Way Home</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-md-12">
                        <div class="card">
                            <img src={superman} class="card-img-top" />
                            <div class="card-body bg-transparen">
                                <h5 class="card-title">Super DEDE</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-md-12">
                        <div class="card">
                            <img src={antman} class="card-img-top" />
                            <div class="card-body bg-transparen">
                                <h5 class="card-title">Ant man</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-md-12">
                        <div class="card">
                            <img src={batman} class="card-img-top" />
                            <div class="card-body bg-transparen">
                                <h5 class="card-title">Bat Man</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Tranding
