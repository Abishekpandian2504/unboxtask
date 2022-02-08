import { useEffect, useState } from 'react';
//import  ---- from '../api/---';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Hi there!');
    try {
      const response = await apiname.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: '-------'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('');
  useEffect(() => {
    searchApi('----');
  }, []);

  return [searchApi, results, errorMessage];
};
