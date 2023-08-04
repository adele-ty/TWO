import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import IconButton from './IconButton';

function Player({url}) {
  const [iconName, setIconName] = useState('play');
  const playbackState = usePlaybackState();

  useEffect(() => {
    setup();
  }, []);

  async function setup() {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.reset();

    await TrackPlayer.add({
      id: 'trackId',
      url: url,
      title: 'Example Track',
      artist: 'Example Artist',
    });
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getActiveTrackIndex();
    if (currentTrack == null) {
      await setup();
    } else {
      console.log(url);
      console.log(playbackState, TrackPlayer.STATE_PLAYING);
      if (playbackState === TrackPlayer.STATE_PLAYING) {
        await TrackPlayer.pause();
        setIconName('play');
      } else {
        await TrackPlayer.play();
        setIconName('pause');
      }
    }
  }

  return (
    <IconButton
      pressEvent={togglePlayback}
      name={iconName}
      size={20}
      color="white"
      style={styles.icon}
      backgroundStyle={styles.circleBackground}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  circleBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '30%',
    height: '30%',
    borderRadius: 1000,
  },
});

export default Player;
