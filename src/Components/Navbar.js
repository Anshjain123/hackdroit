import React from 'react'
import photo from './Images/photo.png'
import { Carousel } from 'react-bootstrap'
function Navbar() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">Travel</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">About Us</a>
                            </li>


                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <div className="dropdown dropstart open">
                            <button type="button" className="btn dropdown-toggle" style={{ color: 'white', boxShadow: 'none' }} data-bs-toggle="dropdown" aria-expanded="false">
                                <b><img src={photo} width={35} style={{ borderRadius: "25px", marginRight: '7px' }} /></b>
                                <b>Me</b>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                <li><a class="dropdown-item" href="#"><b>Account</b></a></li>
                                <li><a class="dropdown-item my-4" href="#"><b>Edit Profile</b></a></li>
                                <li><a class="dropdown-item my-4" href="#"><b>Messages</b></a></li>
                                <li><a class="dropdown-item my-4" href="#"><b>Settings</b></a></li>
                                <li><a class="dropdown-item" href="#"><b>Logout</b></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar