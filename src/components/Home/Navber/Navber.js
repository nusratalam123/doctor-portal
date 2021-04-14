import React from 'react';

const Navber = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item active">
          <a class="nav-link ms-5 mr-5" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 mr-5" href="#">Aout</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 mr-5" href="#">Dental Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 mr-5 text-white" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 mr-5 text-white" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5 mr-5 text-white" href="#">Contact Us</a> 
        </li>
      </ul>
    </div>
  </div>
</nav>
           
    
    );
};

export default Navber;