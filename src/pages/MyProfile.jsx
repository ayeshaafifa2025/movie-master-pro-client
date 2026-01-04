// import React, { useContext } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from 'react-router';
// import { AuthContext } from '../provider/AuthContext';

// const MyProfile = () => {
//   const { user, logOut } = useContext(AuthContext);
//   
//   const navigate = useNavigate();

//   if (!user) {
//     return <div className="min-h-screen flex items-center justify-center"><progress className="progress w-56"></progress></div>;
//   }

//   const handleLogout = () => {
//     logOut()
//       .then(() => {
//         toast.success("Logged out successfully");
//         navigate('/');
//       })
//       .catch(() => {
//         toast.error("Failed to logout");
//       });
//   };

//   return (
//     <div className="min-h-full flex items-center justify-center">
//       <div className="card bg-base-100 shadow-xl w-full max-w-md p-6 text-center">
//         
//         <img
//           src={user?.photoURL || "https://i.ibb.co/6P0w7GZ/default-avatar.png"}
//           alt="Profile"
//           className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
//         />

//         <h2 className="text-2xl font-semibold mb-1">
//           {user?.displayName || "User Name N/A"}
//         </h2>

//         <p className="text-gray-600 mb-6">{user?.email || "Email N/A"}</p>
//         
//         <button
//           onClick={handleLogout}
//           className="
//                 text-black bg-gradient-to-r from-purple-300 via-cyan-200 to-teal-300
//                 px-6 py-3.5 
//                 rounded-xl 
//                 font-medium shadow-lg transition-all duration-300 w-full
//                 hover:shadow-xl hover:scale-[1.02] 
//                 hover:from-purple-300 hover:via-cyan-300 hover:to-teal-400
//             "
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;




import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const MyProfile = () => {
    // AuthContext থেকে user, logOut, এবং updateUser (নতুন) অ্যাক্সেস করা হলো
    const { user, logOut, updateUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    
    // এডিট মোড স্টেট
    const [isEditing, setIsEditing] = useState(false);
    
    // ফর্ম ডেটা স্টেট
    const [displayName, setDisplayName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [updateLoading, setUpdateLoading] = useState(false);

    if (!user) {
        // user লোড না হওয়া পর্যন্ত loading state দেখানো
        return <div className="min-h-screen flex items-center justify-center"><progress className="progress w-56"></progress></div>;
    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged out successfully");
                navigate('/');
            })
            .catch(() => {
                toast.error("Failed to logout");
            });
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        setUpdateLoading(true);

        const updatedData = {};

        // যদি নাম পরিবর্তন করা হয়
        if (displayName !== user?.displayName) {
            updatedData.displayName = displayName;
        }

        // যদি ছবি পরিবর্তন করা হয়
        if (photoURL !== user?.photoURL) {
            updatedData.photoURL = photoURL;
        }
        
        // যদি কোনো তথ্য পরিবর্তন না হয়
        if (Object.keys(updatedData).length === 0) {
            toast.info("No changes detected.");
            setIsEditing(false);
            setUpdateLoading(false);
            return;
        }

        // Firebase-এ আপডেট করা
        updateUser(updatedData)
            .then(() => {
                // স্টেট আপডেট: Firebase আপডেট হওয়ার পর, AuthContext-এর user স্টেট ম্যানুয়ালি আপডেট করা হলো
                // এটি UI তে দ্রুত পরিবর্তন দেখাতে সাহায্য করে
                setUser({ ...user, ...updatedData }); 
                toast.success("Profile updated successfully!");
                setIsEditing(false); // এডিট মোড বন্ধ করা হলো
            })
            .catch((error) => {
                console.error("Profile update failed:", error);
                toast.error("Failed to update profile: " + error.message);
            })
            .finally(() => {
                setUpdateLoading(false);
            });
    };
    
    // এডিট মোড শুরু করার জন্য, বর্তমান ডেটা দিয়ে স্টেট সেট করা হলো
    const startEditing = () => {
        setDisplayName(user?.displayName || '');
        setPhotoURL(user?.photoURL || '');
        setIsEditing(true);
    };


    return (
        <div className="min-h-full flex items-center justify-center">
            <div className="card bg-base-100 shadow-xl w-full max-w-md p-6 text-center">
                
                <img
                    src={user?.photoURL || "https://i.ibb.co/6P0w7GZ/default-avatar.png"}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
                />

                {!isEditing ? (
                    // Read Mode
                    <>
                        <h2 className="text-2xl font-semibold mb-1">
                            {user?.displayName || "User Name N/A"}
                        </h2>
                        <p className="text-gray-600 mb-6 break-words">{user?.email || "Email N/A"}</p>
                        
                        <button
                            onClick={startEditing}
                            className="btn btn-sm btn-primary mb-4 w-full"
                        >
                            Edit Profile
                        </button>
                    </>
                ) : (
                    // Edit Mode
                    <form onSubmit={handleUpdateProfile} className="text-left space-y-4">
                        
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                placeholder="Your Display Name"
                                className="input input-bordered w-full"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                placeholder="Your Photo URL"
                                className="input input-bordered w-full"
                            />
                        </div>
                        
                        <p className="text-sm text-gray-500 mb-4 break-words">Email: {user?.email}</p>

                        <div className="flex justify-between gap-4 mt-6">
                            <button
                                type="button"
                                onClick={() => setIsEditing(false)}
                                className="btn btn-outline w-1/2"
                                disabled={updateLoading}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-success w-1/2"
                                disabled={updateLoading}
                            >
                                {updateLoading ? <span className="loading loading-spinner"></span> : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                )}
                
                <div className="divider my-4"></div>
                
                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="
                        text-black bg-gradient-to-r from-purple-300 via-cyan-200 to-teal-300
                        px-6 py-3.5 
                        rounded-xl 
                        font-medium shadow-lg transition-all duration-300 w-full
                        hover:shadow-xl hover:scale-[1.02] 
                        hover:from-purple-300 hover:via-cyan-300 hover:to-teal-400
                    "
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default MyProfile;