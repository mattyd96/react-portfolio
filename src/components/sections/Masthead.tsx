import { MediaQuery, Text } from "@mantine/core";
import { BsCircleFill } from "react-icons/bs";

import Navbar from '../navigation/Navbar';


const Masthead: React.FC = () => {
  return (
    <section style={{height: '100vh'}}>
      <Navbar />
      <MediaQuery smallerThan={'sm'} styles={{}}>
        <section style={{height: '90%', display: 'flex',flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <img src="/assets/heroLogo.svg" alt="MD logo" style={{flexGrow: 1, maxWidth: 'min(100%, 25rem)'}}/>
            <div>
              <h2>Matthew Durflinger</h2>
              <p>Fullstack Development Portfolio</p>
            </div> 
        </section>
      </MediaQuery>
    </section>
  );
}

export default Masthead;