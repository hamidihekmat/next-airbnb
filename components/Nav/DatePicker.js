import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styled from '@emotion/styled';
import { Users } from 'phosphor-react';
import { useState } from 'react';
import { useRouter } from 'next/router';

export function DatePicker() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guests, setGuests] = useState(0);

  function handleSelection(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function handleIncrement() {
    if (guests < 10) {
      setGuests(guests + 1);
    }
  }

  function handleDecrement() {
    if (guests !== 0) {
      setGuests(guests - 1);
    }
  }
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };

  return (
    <StyledDatePicker>
      <DateRangePicker
        className="picker"
        ranges={[selectionRange]}
        onChange={handleSelection}
      />
      <StyledGuests>
        <div className="select">
          <h3>Number of guests</h3>
          <div className="buttons">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>

        <StyledSelectionGuests>
          <h3>{guests}</h3>
          <Users size={32} />
        </StyledSelectionGuests>
      </StyledGuests>
      <StyedSearchButton onClick={() => router.push('/listings')}>
        Search Dates
      </StyedSearchButton>
    </StyledDatePicker>
  );
}

const StyledDatePicker = styled.div`
  position: absolute;
  background: white;
  top: 100%;
  z-index: 99;
  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    .buttons {
      margin-left: 1rem;
      button {
        cursor: pointer;
        margin: 0 2px;
        padding: 3px 5px;
        font-size: 1.3rem;
        border: none;
        border-radius: 5px;
        color: white;
        background-color: #f7585d;
      }
    }
    h3 {
      font-weight: 700;
    }
  }

  @media (max-width: 558px) {
    display: none;
  }
`;

const StyledGuests = styled.div`
  padding: 1rem 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSelectionGuests = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
  svg {
    margin-left: 1rem;
  }
`;

const StyedSearchButton = styled.button`
  width: 100%;
  padding: 1rem 0rem;
  background-color: #f7585d;
  border: none;
  color: white;
  cursor: pointer;
`;
