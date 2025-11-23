import React, { use , useState} from 'react';
import NavBar from './NavBar';
import { Link, useLoaderData } from 'react-router';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import Container from './Container';
import Loading from '../pages/Loading';

const UpdateMovie = () => {
    const movie= useLoaderData();
    const [loading, setLoading] = useState(false);
    console.log (movie);
   const {language,cast,country,createdAt,director,duration,email,genre,plotSummary,posterUrl,rating,releaseYear,title,_id}= useLoaderData;

    
    const{user}=use(AuthContext);
    const updateMovie=(e)=>{
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

        const updatedMovie ={
            title,
            genre,
            email,
            releaseYear,
            posterUrl,
            director,
            cast,
            rating,
            duration,
            plotSummary,
            language,
            country,
            createdAt

        }
        fetch(`http://localhost:3000/update/${movie._id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedMovie)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('after update',data)
            form.reset();
            setLoading(false);
            if(data.modifiedCount){
                toast('updated')
            }
        })




    }
    return (
        <Container>
<div className='bg-amber-50'>
          
            <div>
        <NavBar></NavBar>
        

       {
        loading? <Loading></Loading>: ( <main>
            <div className="min-h-screen  flex items-center justify-center p-6">
<div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 border border-blue-200">
<h1 className="text-4xl font-bold text-center mb-6 text-black">Update a movie</h1>


<form onSubmit={updateMovie}>
<fieldset className="space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">title</label>
<input type="text" name="title" defaultValue={movie.title}  className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">genre</label>
<input type="text" name="genre" defaultValue={movie.genre} className="input input-bordered rounded-xl" required />
</div>
</div>



<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">Email</label>
<input type="email" name="email" defaultValue={user.email} className="input input-bordered rounded-xl" readOnly required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">releaseYear</label>
<input type="text" name="releaseYear" defaultValue={movie.releaseYear} className="input input-bordered rounded-xl" required />
</div>
</div>



<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">posterUrl</label>
<input type="text" name="posterUrl" defaultValue={movie.posterUrl} className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">director</label>
<input type="text" name="director" defaultValue={movie.director} className="input input-bordered rounded-xl" required />
</div>
</div>



<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">rating</label>
<input type="text" name="rating" defaultValue={movie.rating} className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">cast</label>
<input type="text" name="cast" defaultValue={movie.cast} className="input input-bordered rounded-xl" required />
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">duration</label>
<input type="text" name="duration" defaultValue={movie.duration} className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">plotSummary</label>
<input type="text" name="plotSummary" defaultValue={movie.plotSummary} className="input input-bordered rounded-xl" required />
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">language</label>
<input type="text" name="language" defaultValue={movie.language} className="input input-bordered rounded-xl" required />
</div>


<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">country</label>
<input type="text" name="country" defaultValue={movie.country} className="input input-bordered rounded-xl" required />
</div>
</div>

<div className="grid grid-cols-1 gap-4">
<div className="flex flex-col space-y-1">
<label className="text-sm font-semibold text-gray-700">createdAt</label>
<input type="text" name="createdAt" defaultValue={movie.createdAt} className="input input-bordered rounded-xl" required />
</div>
</div>


<button type="submit" className="btn btn-neutral w-full mt-4 rounded-xl py-3 text-lg shadow-md hover:scale-[1.02] transition">submit  </button>
</fieldset>
</form>
</div>
</div> 

        </main>)
       }
        <button  className='btn btn-primary'>
    <Link to={"/my-collection"}>
    Go To Your Collection

    </Link>   
                        </button>

        <Footer></Footer>

        </div>
            
        </div>
        </Container>
        
    );
};

export default UpdateMovie;