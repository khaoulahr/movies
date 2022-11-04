import React from 'react';
import Main from '../components/Main';
import requests from '../Requests';
import Row from '../components/Row';

const Home = () => {
  return (
    <>
        <Main />
        <Row rowID='1'
        title='Top Rated'
        fetchURL={requests.fetchTopRated}
         />
        <Row rowID='2'
        title='Popular Movies'
        fetchURL={requests.requestPopular} 
        />
         <Row rowID='3'
        title='Action Movies'
        fetchURL={requests.fetchActionMovies}
         />
         <Row rowID='4'
        title='Comedy Movies'
        fetchURL={requests.fetchComedyMovies}
        />
         <Row rowID='5'
        title='Horror Movies'
        fetchURL={requests.fetchHorrorMovies}
         />   
         <Row rowID='6'
        title='Documentaries '
        fetchURL={requests.fetchDocumentaries}
         />
          <Row rowID='7'
        title='History Movies '
        fetchURL={requests.fetchHistoryMovies}
         />
          <Row rowID='8'
        title='Animation Movies '
        fetchURL={requests.fetchAnimationMovies}
         />
          <Row rowID='9'
        title='Fantasy Movies '
        fetchURL={requests.fetchFantasyMovies}
         />
    </>
  )
}

export default Home