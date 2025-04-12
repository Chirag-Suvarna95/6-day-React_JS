"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Profile() {
    const router = useRouter(); // Initialize router

    const users = [
        {
            id: 1,
            name: "James",
            email: "thenameisbond@gmail.com",
            avatar: "https://static.wikia.nocookie.net/jamesbond/images/8/81/James_Bond_%28Daniel_Craig%29_-_Profile.jpg/revision/latest?cb=20220103100438"
        },
        {
            id: 2,
            name: "Jason",
            email: "jacobb@example.com",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Matt_Damon_TIFF_2015.jpg/220px-Matt_Damon_TIFF_2015.jpg"
        },
        {
            id: 3,
            name: "John",
            email: "wick@feline.com",
            avatar: "https://www.usatoday.com/gcdn/presto/2023/03/20/USAT/c629661e-b8c8-4fe5-a7a6-77560354a65b-john-wick-chapter-4-JW4_Unit_211027_00134_R2_rgb.jpg?crop=3042,3042,x1058,y0"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-blue-200 w-full items-center justify-center p-8">
            <h1 className="text-3xl font-bold mb-6">User Profiles</h1>

            {/* Grid layout for user cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map((user) => (
                    <div 
                        key={user.id} 
                        className="bg-white w-[300px] rounded-lg shadow-lg flex flex-col items-center p-6"
                    >
                        <img 
                            src={user.avatar} 
                            alt="Profile Avatar"
                            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
                        />
                        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
                        <p className="text-gray-600 mb-4">{user.email}</p>
                        
                        <button 
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition mb-2"
                            onClick={() => router.push(`/details/${user.id}`)} // Navigate to user-specific details page
                        >
                            View details
                        </button>
                        
                        <button className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition">
                            Logout
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
