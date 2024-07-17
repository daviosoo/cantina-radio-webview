import React, {useEffect, useState} from 'react';

const CurrentInfo = () => {
  const [songData, setSongData] = useState<{
    connections: string;
    nowplaying: string;
  } | null>(null);

  useEffect(() => {
    setInterval(() => {
      fetch(
        'https://cloudoledgo.com:2000/AudioPlayer/lacantinadesergiozapata/playerInfo',
      )
        .then(response => response.json())
        .then(actualData => setSongData(actualData));
    }, 5000);
  }, []);

  useEffect(() => {
    if (!songData) {
      return;
    }
  }, [songData]);

  if (!songData) {
    return (
        <svg style={{marginBottom: 40}} fill='white' width={22} height={22} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
    );
  }

  return (
    <>
        <span className="content-data__span">{songData.connections} Oyentes</span>
        <h1 className="content-data__h1">{songData.nowplaying.split(' - ')[0]}</h1>
        <h2 className="content-data__h2">{songData.nowplaying.split(' - ')[1]}</h2>
    </>
  );
};

export default CurrentInfo;
