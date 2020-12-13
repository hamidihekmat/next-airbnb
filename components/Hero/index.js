import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Hero() {
  const router = useRouter();
  return (
    <StyledHero>
      <Image src="/assets/hero.jpg" alt="hero-img" layout="fill" />
      <StyledHeroHead>
        <h1>Go</h1>
        <h1>Near</h1>
        <button onClick={() => router.push('/listings')}>
          Explore nearby stays
        </button>
      </StyledHeroHead>
    </StyledHero>
  );
}

const StyledHero = styled.div`
  position: relative;
  height: 70vh;
  width: 100vw;
  z-index: 1;
  img {
    object-fit: cover;
    filter: brightness(0.9);
  }
`;

const StyledHeroHead = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  color: white;
  h1 {
    font-size: 5rem;
  }
  button {
    margin-top: 10px;
    padding: 8px 10px;
    background: white;
    border: none;
    color: black;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default Hero;
