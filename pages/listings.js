import styled from '@emotion/styled';
import { Container } from '../styles/styles';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../apollo/Queries';

function listings() {
  const { data, error, loading } = useQuery(GET_ROOMS);
  if (data) {
    const { getRooms } = data;
    console.log(getRooms);
  }
  return (
    <StyledContainer>
      <main className="container max-w-screen-lg flex flex-wrap px-4">
        <h1 className="w-full m-2 text-4xl font-bold">Listings near you</h1>
        {/* <!-- Cards --> */}
        {data &&
          data.getRooms.map((room) => (
            <div
              key={room.id}
              className="md:flex md:max-w-3xl md:h-full mx-2 my-4 max-w-sm bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="md:w-1/2 md:h-56 w-full h-56 object-cover object-center"
                src={room.selectedFile}
                alt={room.heading}
              />
              <div className="md:m-2 md:truncate w-full p-3 flex flex-col">
                <h2 className="truncate text-gray-900 text-lg font-semibold">
                  {room.heading}
                </h2>
                <span className="md:my-4 md:border-b md:py-2 block text-sm text-gray-600 mt-2">
                  {room.guests} guests · {room.bedRooms} bedroom · {room.bed}{' '}
                  bed · {room.bathRooms} bath
                </span>
                <span className="md:my-2 block text-sm text-gray-600 mt-2 truncate">
                  Self check-in · Indoor fireplace · Free parking
                </span>
                {/* <!-- rating --> */}
              </div>
            </div>
          ))}
        {/* <!-- card 2 --> */}
        <div className="md:flex md:max-w-3xl md:h-full mx-2 my-4 max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="md:w-1/2 md:h-56 w-full h-56 object-cover object-center"
            src="https://a0.muscache.com/im/pictures/8581f102-a6b8-440c-87d5-f06f779cd523.jpg?aki_policy=large"
            alt=""
          />
          <div className="md:m-2 md:truncate w-full p-3 flex flex-col">
            <h2 className="truncate text-gray-900 text-lg font-semibold">
              One bedroom lake front cottage in Muskoka
            </h2>
            <span className="md:my-4 md:border-b md:py-2 block text-sm text-gray-600 mt-2">
              2 guests · 1 bedroom · 1 bed · 1 bath
            </span>
            <span className="md:my-2 block text-sm text-gray-600 mt-2 truncate">
              Self check-in · Indoor fireplace · Free parking
            </span>
            {/* <!-- rating --> */}
          </div>
        </div>

        <div className="md:flex md:max-w-3xl md:h-full mx-2 my-4 max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="md:w-1/2 md:h-56 w-full h-56 object-cover object-center"
            src="https://a0.muscache.com/im/pictures/ff2c1c5a-2f80-4002-a976-f9eb89a33203.jpg?aki_policy=large"
            alt=""
          />
          <div className="md:m-2 md:truncate w-full p-3 flex flex-col">
            <h2 className="truncate text-gray-900 text-lg font-semibold">
              One bedroom lake front cottage in Muskoka
            </h2>
            <span className="md:my-4 md:border-b md:py-2 block text-sm text-gray-600 mt-2">
              2 guests · 1 bedroom · 1 bed · 1 bath
            </span>
            <span className="md:my-2 block text-sm text-gray-600 mt-2 truncate">
              Self check-in · Indoor fireplace · Free parking
            </span>
          </div>
        </div>
      </main>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)``;

export default listings;
