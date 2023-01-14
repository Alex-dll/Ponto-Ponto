import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { useClockStore } from '../../store/clockStore';
import { formatDate } from '../../utils';
import Text from '../Text';
import { Container } from './styles';

const DigitalClock = () => {
  const { timer, setTimer } = useClockStore(state => state);

  const refreshClock = useCallback(() => {
    return setTimer(new Date());
  }, []);

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const formattedDate = formatDate(timer);

  return (
    <Container>
      <Text color="surface" typography="h2">
        {formattedDate}
      </Text>
    </Container>
  );
};

export default DigitalClock;
