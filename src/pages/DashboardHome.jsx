import React from 'react';
// import useRole from '../hooks/useRole'; // প্রয়োজন নেই, কারণ role-based logic সরানো হলো

import UserDashboardHome from './UserDashboardHome';


// এই কম্পোনেন্টটি এখন শুধু UserDashboardHome রেন্ডার করবে
const DashboardHome = () => {
    // যদি আপনি ভবিষ্যতে কোনো ইউনিভার্সাল লোডিং স্টেট ব্যবহার করেন, তবে এখানে রাখতে পারেন।
    // বর্তমানে আমরা ধরে নিচ্ছি কোনো জটিল role logic নেই।

    return <UserDashboardHome />;
};

export default DashboardHome;