

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthContext";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MySingle from "./MySingle";
import Swal from "sweetalert2";
import Container from "./Container";

const MyCollection = () => {
  const { user } = useContext(AuthContext);
  const [collection, setCollection] = useState([]);

            const handleDelete= (_id)=>{
              
              Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(' Delete button pressed');
        
            fetch(`http://localhost:3000/popular/${_id}`,{
              method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data=>{
              console.log('after delete ',data)
              if (data.deletedCount) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");

              // ⬇️ Update UI (Remove from state)
              const remaining = collection.filter(item => item._id !== _id);
              setCollection(remaining);
            }
        });
      }
    });
  };


  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/popular?email=${user.email}`)
      .then(res => res.json())
      .then(single => {console.log(single);
        const already = single.find(item=> item.email == user.email);
        if(already)
        setCollection(single)});
  }, [user]);
//  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <div className="bg-amber-50">
      <NavBar />
      <menu>
        <h1 className="text-3xl font-bold text-center text-black">My Collection: {collection.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {collection.map(single => (
            <MySingle key={single._id} single={single} handleDelete={handleDelete} />
          ))}
        
        </div>
       
      </menu>
      <Footer />
    </div>

    </Container>
    
  );
};

export default MyCollection;





