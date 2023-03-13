//import styled from "styled-components";
import css from './Home.module.css';
//import BackPic from '../Home/images/background.jpg';

const Home = () => (
  <div>
    {/* <HomeWrapper> */}
    <h1 className={css.title}>꧁ My Phonebook ꧂</h1>
    {/* </HomeWrapper> */}
  </div>
);

// const HomeWrapper = styled.div`
//   height: 100%;
//   width: 100%;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0 auto;
//   background-color: white;
//   background-image: url(${BackPic});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: contain;
// `;

export default Home;