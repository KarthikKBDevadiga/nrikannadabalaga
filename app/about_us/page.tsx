'use client';
import React from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'President',
      imageUrl: 'https://source.unsplash.com/200x200/?person1',
    },
    {
      name: 'Jane Smith',
      position: 'Vice President',
      imageUrl: 'https://source.unsplash.com/200x200/?person2',
    },
    {
      name: 'Alice Johnson',
      position: 'Treasurer',
      imageUrl: 'https://source.unsplash.com/200x200/?person3',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 mb-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">About Us</h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Welcome to NRI Kannada Balaga. We are a community dedicated to preserving and promoting Kannada culture.
          </p>
          <div className="mt-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Our mission is to foster unity among Kannadigas living abroad and to celebrate our language and heritage.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img src={member.imageUrl} alt={member.name} className="w-32 h-32 mx-auto rounded-full" />
                  <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mt-2 text-lg text-gray-600">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
