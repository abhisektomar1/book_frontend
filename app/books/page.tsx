"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '@/components/BookCard';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

export default function BooksPage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;

  useEffect(() => {
    const authToken = localStorage.getItem('token');
    if (!authToken) {
      router.push('/');
      return;
    }
    axios
      .get(`http://localhost:4521/api/books`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  // Calculate indexes of books to display on the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = data.slice(indexOfFirstBook, indexOfLastBook);

  // Function to handle pagination
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <>
      <Header />
      <div>
        <button
          onClick={() => {
            router.push('/newBook');
          }}
          className="bg-black text-white px-4 py-2 rounded-lg border-b-2 border-black hover:bg-gray-700 m-5"
        >
          Add Book
        </button>
      </div>
   
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:ml-[130px] lg:ml-[130px] lg:grid-cols-4 gap-9">
  {currentBooks.map((book: any, index) => (
    <BookCard {...book} key={index} />
  ))}
</div>


      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 mx-1 rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={indexOfLastBook >= data.length}
          className="bg-gray-200 text-gray-800 font-semibold px-4 py-2 mx-1 rounded-lg"
        >
          Next
        </button>
      </div>
    </>
  );
}
