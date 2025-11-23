import React, { useState } from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import Footer from './Footer';
import { Language } from 'firebase/ai';
import { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
import Swal from 'sweetalert2';
import Container from './Container';
import Loading from '../pages/Loading';


const AddMovie = () => {

    const {user}=use(AuthContext);
    const [loading, setLoading] = useState(false);
    console.log(user);

    const handleCreateMovie=(e)=>{
        e.preventDefault();
        setLoading(true);
        const form= e.target;
         const title  =e.target.title.value;
        const genre =e.target.genre.value;
        const email =user.email;
        const releaseYear =e.target.releaseYear.value;
        const posterUrl =e.target.posterUrl.value;
         const director =e.target.director.value;
        const cast =e.target.cast.value;
        const rating =e.target.rating.value;
        const duration =e.target.duration.value;
        const plotSummary =e.target.plotSummary.value;
         const language =e.target.language.value;
        const country =e.target.country.value;
        const createdAt =e.target.createdAt.value;

        console.log(title,genre,email,releaseYear,posterUrl,director,cast,rating,duration,plotSummary,language,country,createdAt)
       
 const newPopular={
    

    title:title,
    genre:genre,
    email:email,
    releaseYear:releaseYear,
    posterUrl:posterUrl,
    director:director,
    cast:cast,
    rating:rating,
    duration:duration,
    plotSummary:plotSummary,
    language:language,
    country:country,
    createdAt,

      }
    fetch('http://localhost:3000/popular',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newPopular)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("Data after user",data)
        form.reset();
        setLoading(false);
        if(data.insertedId
        ){
            
            Swal.fire({
          position: "top-end",
          icon: "success",
          title: "movie successfully added to your collection",
          showConfirmButton: false,
          timer: 1500
        });
        
        
        }
    })
    }
    return (
        <Container>
            <div>
        <NavBar></NavBar>
        
{
    loading? <Loading></Loading>: (<main>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-6">
<div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 border border-blue-200">
<h1 className="text-4xl font-bold text-center mb-6 text-blue-700">Create A Movie</h1>


<form onSubmit={handleCreateMovie}>
<fieldset className="space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">title</label>
<input type="text" name="title" placeholder="Movie Name" className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">genre</label>
<input type="text" name="genre" placeholder="genre" className="input input-bordered rounded-xl" required />
</div>
</div>



<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">Email</label>
<input type="email" name="email" defaultValue={user.email} className="input input-bordered rounded-xl" readOnly required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">releaseYear</label>
<input type="text" name="releaseYear" placeholder="releaseYear" className="input input-bordered rounded-xl" required />
</div>
</div>



<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">posterUrl</label>
<input type="text" name="posterUrl" placeholder="posterUrl" className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">director</label>
<input type="text" name="director" placeholder="director" className="input input-bordered rounded-xl" required />
</div>
</div>



<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">rating</label>
<input type="text" name="rating" placeholder="rating" className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">cast</label>
<input type="text" name="cast" placeholder="cast" className="input input-bordered rounded-xl" required />
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">duration</label>
<input type="text" name="duration" placeholder="duration" className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">plotSummary</label>
<input type="text" name="plotSummary" placeholder="plotSummary" className="input input-bordered rounded-xl" required />
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">language</label>
<input type="text" name="language" placeholder="language" className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">country</label>
<input type="text" name="country" placeholder="country" className="input input-bordered rounded-xl" required />
</div>
</div>

<div className="grid grid-cols-1 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">createdAt</label>
<input type="text" name="createdAt" placeholder="createdAt" className="input input-bordered rounded-xl" required />
</div>
</div>


<button type="submit" className="btn btn-neutral w-full mt-4 rounded-xl py-3 text-lg shadow-md hover:scale-[1.02] transition">submit  </button>
</fieldset>
</form>
</div>
</div>

        </main>
         
    )
}
      <div className='mt-10'> 
        <button  className='btn  btn-primary text-white'>
    <Link to={"/my-collection"}>
    Go To Your Collection

    </Link>   
                        </button> 
      </div>
        

        <Footer></Footer>

        </div>

        </Container>

        
       



  );
}

    

export default AddMovie;