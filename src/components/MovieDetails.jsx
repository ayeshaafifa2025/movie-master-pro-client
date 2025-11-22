import React, { use, useRef } from 'react';

import MovieDetailsCard from './MovieDetailsCard';
import { useLoaderData } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';



const MovieDetails = () => {
    
    const findMovie=useLoaderData();
    const {_id:movieId}=useLoaderData();
    console.log(findMovie);

    const {user}=use(AuthContext);

    const collectionModalRef = useRef(null);
    const handleCollectionModalOpen =()=>{
        collectionModalRef.current.showModal();
    }

    const handleCollectionSubmit =(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const email =e.target.email.value;
        const rating =e.target.rating.value;
        const review =e.target.review.value;
        const photoUrl =e.target.photoUrl.value;
        // console.log(_id,name, email,rating,review,photoUrl)
        const newPopular={

            movie : movieId,
            user_name:name,
            user_email:email,
            user_photo:photoUrl,
            user_review:review,
            user_rating:rating



        }
        fetch('http://localhost:3000/popular',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({newPopular})
        })
        .then(res=>res.json())
        .then(
            data=>{
                console.log('after choosing',data)
                if(data.insertedId
){
    collectionModalRef.current.close();
    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "movie successfully added to your collection",
  showConfirmButton: false,
  timer: 1500
});
}
            }
        )

    }
    
    
   
    return (
        <div>
            <NavBar></NavBar>
            <main>

                
                     
                     <MovieDetailsCard findMovie={findMovie}></MovieDetailsCard>


                     {/* my collection */}
                     <div>
                        <button onClick={handleCollectionModalOpen} className='btn btn-primary'>
                           collect movie
                        </button>
                        {/* modal */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog ref={collectionModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
     <div>
        <div>
<div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Collect This Movie</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body bg-amber-200">
    
        <form onSubmit={handleCollectionSubmit}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">name</label>
          <input type="text"  name="name" className="input" readOnly defaultValue={user?.displayName}/>
          {/* photo url */}
          <label className="label">photoUrl</label>
          <input type="text"  name="photoUrl" className="input" readOnly defaultValue={user?.photoURL} />
          {/* email */}
          <label className="label">Email</label>
          <input type="email"  name="email" className="input" readOnly defaultValue={user?.email} />
          {/* REVIEW */}
          <label className="label">Give Your review</label>
          <input type="text"  name="review" className="input" placeholder='right your openion' />
          {/* Rating */}
          <label className="label">Give Your rating</label>
          <input type="text"  name="rating" className="input" placeholder='give rating' />
          
   
          <button type='submit' className="btn btn-neutral mt-4">Add to your Collection</button>
        </fieldset>
        </form>
      </div>
    </div>
      
  </div>

</div>

        </div>
      </div>

      </div>
      
    
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
                     </div>
                    
                     

                
            </main>
            <Footer></Footer>
            
        </div>
    );
};

export default MovieDetails;