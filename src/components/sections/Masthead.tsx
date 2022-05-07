import { MediaQuery, Text } from "@mantine/core";
import { BsCircleFill } from "react-icons/bs";
import Footer from "../footer/Footer";

import Navbar from '../navigation/Navbar';


function Masthead() {
  return (
    <section style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <section style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexGrow: '1'}}>
          <img src="/assets/heroLogo.svg" alt="MD logo" style={{flexGrow: 1, maxWidth: 'min(100%, 25rem)'}}/>
          <div>
            <h2>Matthew Durflinger</h2>
            <p>Fullstack Development Portfolio</p>
          </div> 
      </section>
      <Footer />
    </section>
  );
}

export default Masthead;