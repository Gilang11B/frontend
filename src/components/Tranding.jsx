import React from 'react'
import joker from '../assets/images/trending/joker.jpg'
import dune from '../assets/images/trending/dune.jpg'
import morbius from '../assets/images/trending/morbius.jpg'
import superman from '../assets/images/superhero/superman.jpg'
import batman from '../assets/images/superhero/batman.jpg'
import antman from '../assets/images/superhero/antman.jpg'


function Tranding() {
  return (
      <div className='tranding container-fluid'id='trending'>
          <div className="container p-3 text-light text-center">
              <h1>Tranding</h1>
              <br />
          <div className="row">
                  <div className="col-lg-4 col-md-6 col-md-12">
                      <div class="card">
                          <img src={joker} class="card-img-top"  />
                            <div class="card-body bg-transparen">
                            <h5 class="card-title">Joker The Movie</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                      </div>
                </div>
                  <div className="col-lg-4 col-md-6 col-md-12">
                      <div class="card">
                          <img src={morbius} class="card-img-top"  />
                            <div class="card-body bg-transparen">
                            <h5 class="card-title">Mobius</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                      </div>
                </div>
                  <div className="col-lg-4 col-md-6 col-md-12">
                      <div class="card">
                          <img src={dune} class="card-img-top" />
                            <div class="card-body bg-transparen">
                            <h5 class="card-title">It Begin Dune</h5>
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
                          <img src={batman} class="card-img-top"  />
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
