import React from 'react'
import Footer from 'components/Footers/Footer';
import IndexNavbar from 'components/Navbars/IndexNavbar';

const SearchRedirect = ({results}) => {
  return (
    <>
    <IndexNavbar fixed />
    <div>
    <h3 className="text-3xl font-semibold leading-normal text-blueGray-700 py-5">
             Search Results
    </h3>
    </div>

    <Footer />
    
    
    </>
  )
}

export default SearchRedirect