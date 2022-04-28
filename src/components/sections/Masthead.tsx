import { Center, Grid, Title } from "@mantine/core";


const Masthead: React.FC = () => {
  return (
    <>
      <section style={{maxWidth: '20rem', display: 'grid', justifyItems: 'center', justifyContent: 'center', gridTemplateColumns: '1fr', gridTemplateRows: '1fr', overflow: 'hidden'}}>
        <video autoPlay loop muted playsInline style={{objectFit: 'cover', gridColumn: '1/2', gridRow: '1/2'}}>
          <source src="/assets/ocean2.mp4" type='video/mp4; codecs=hvc1' />
          <source src="/assets/ocean.webm" type='video/webm; codecs=vp9' />
        </video>
        <div style={{ gridColumn: '1/2', gridRow: '1/2', zIndex: 100, backgroundColor: 'white',  mixBlendMode: 'screen', textAlign: 'center'}}>
          <Title style={{fontSize: '25rem', fontWeight: 900, fontFamily:'Poppins'}}>M</Title>
        </div>  
      </section>
      <section style={{maxWidth: '10rem', display: 'grid', justifyItems: 'center', justifyContent: 'center', gridTemplateColumns: '1fr', gridTemplateRows: '1fr'}}>
        <video autoPlay loop muted playsInline style={{objectFit: 'cover', gridColumn: '1/2', gridRow: '1/2'}}>
          <source src="/assets/ocean2.mp4" type='video/mp4; codecs=hvc1' />
          <source src="/assets/ocean.webm" type='video/webm; codecs=vp9' />
        </video>
        <div style={{width: '100%', gridColumn: '1/2', gridRow: '1/2', zIndex: 100, backgroundColor: 'white',  mixBlendMode: 'screen', textAlign: 'center'}}>
          <Title order={1} style={{fontSize: '25rem', fontWeight: 900}}>M</Title>
        </div>  
      </section>
    </>
    
  );
}

export default Masthead;