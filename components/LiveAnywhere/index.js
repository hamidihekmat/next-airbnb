import styled from '@emotion/styled';
import { Container } from '../../styles/styles';
import Image from 'next/image';
function LiveAnywhere() {
  return (
    <StyledLiveAnywhere>
      <h2>Live Anywhere</h2>
      <StyledCards>
        <StyledCard>
          <Image src="/assets/live-home.webp" width={340} height={340} />
          <h4>Entire Homes</h4>
        </StyledCard>
        <StyledCard>
          <Image src="/assets/live-cabin.webp" width={340} height={340} />
          <h4>Cabin and Cottages</h4>
        </StyledCard>
        <StyledCard>
          <Image src="/assets/live-stays.webp" width={340} height={340} />
          <h4>Unique Stays</h4>
        </StyledCard>
        <StyledCard>
          <Image src="/assets/live-pets.webp" width={340} height={340} />
          <h4>Pets Welcomed</h4>
        </StyledCard>
      </StyledCards>
    </StyledLiveAnywhere>
  );
}

const StyledLiveAnywhere = styled(Container)``;

const StyledCards = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
  padding: 1.5rem 0rem;
`;

const StyledCard = styled.div`
  margin-right: 20px;
  img {
    min-width: 325px;
    border-radius: 10px;
    transition: transform 350ms ease;
    &:hover {
      transform: scale(1.2);
    }
  }
  h4 {
    padding-top: 5px;
  }
`;

export default LiveAnywhere;
