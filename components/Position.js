import React, { useState, useEffect } from 'react';
import { List } from 'react-native-paper';
import * as Location from 'expo-location';

export default function Position() {
  const [expanded, setExpanded] = useState(true);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) { text = JSON.stringify(location); }

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section> 
        <List.Accordion
            title="Current position"
            left={props => <List.Icon {...props} icon="map" />}
            expanded={expanded}
            onPress={handlePress}>
          <List.Item title={text} />
        </List.Accordion>
    </List.Section>
  );
}