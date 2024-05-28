/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function CallWindow({ peerSrc, localSrc, config, mediaDevice, status, endCall }) {
  const peerVideo = useRef(null);
  const localVideo = useRef(null);
  const [video, setVideo] = useState(config.video);
  const [audio, setAudio] = useState(config.audio);

  useEffect(() => {
    if (peerVideo.current && peerSrc) peerVideo.current.srcObject = peerSrc;
    if (localVideo.current && localSrc) localVideo.current.srcObject = localSrc;
  });

  useEffect(() => {
    if (mediaDevice) {
      mediaDevice.toggle('Video', video);
      mediaDevice.toggle('Audio', audio);
    }
  });

  /**
   * Turn on/off a media device
   * @param {'Audio' | 'Video'} deviceType - Type of the device eg: Video, Audio
   */
  const toggleMediaDevice = (deviceType) => {
    if (deviceType === 'Video') {
      setVideo(!video);
    }
    if (deviceType === 'Audio') {
      setAudio(!audio);
    }
    mediaDevice.toggle(deviceType);
  };

  return (
    <div className={classnames('call-window', status)}>
      <video id="peerVideo" ref={peerVideo} autoPlay />
      <video id="localVideo" ref={localVideo} autoPlay muted />
      <div className="video-control">
        <button
          className="hangup"
          onClick={() => endCall(true)}
        >    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="red">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.27396 8.94048C3.01237 7.88621 6.8401 6 12 6C17.1599 6 20.9876 7.88621 22.726 8.94048C23.7251 9.54634 24.1355 10.6912 23.9609 11.7514L23.5032 14.5308C23.2353 16.157 21.704 17.2467 20.101 16.9518L17.6354 16.4982C16.5887 16.3056 15.8888 15.2984 16.0637 14.2365L16.2935 12.8413C15.7061 12.4933 14.3714 11.9088 12 11.9088C9.62863 11.9088 8.29388 12.4933 7.70655 12.8413L7.93635 14.2365C8.11123 15.2984 7.41126 16.3056 6.36463 16.4982L3.89895 16.9518C2.29601 17.2467 0.764683 16.157 0.49684 14.5308L0.0390736 11.7514C-0.135542 10.6912 0.274923 9.54635 1.27396 8.94048ZM12 7.96961C7.30768 7.96961 3.82761 9.68804 2.2745 10.6299C2.04751 10.7676 1.8986 11.061 1.95897 11.4276L2.41674 14.207C2.50602 14.749 3.01646 15.1123 3.55077 15.014L6.01645 14.5603L5.76984 13.063C5.66906 12.4511 5.85834 11.6997 6.51793 11.2691C7.34118 10.7317 9.06148 9.93922 12 9.93922C14.9385 9.93922 16.6588 10.7317 17.4821 11.2691C18.1417 11.6997 18.3309 12.4511 18.2302 13.063L17.9836 14.5603L20.4492 15.014C20.9835 15.1123 21.494 14.749 21.5833 14.207L22.041 11.4276C22.1014 11.061 21.9525 10.7676 21.7255 10.6299C20.1724 9.68804 16.6923 7.96961 12 7.96961Z" />
          </svg></button>
      </div>
    </div>
  );
}

CallWindow.propTypes = {
  status: PropTypes.string.isRequired,
  localSrc: PropTypes.object, // eslint-disable-line
  peerSrc: PropTypes.object, // eslint-disable-line
  config: PropTypes.shape({
    audio: PropTypes.bool.isRequired,
    video: PropTypes.bool.isRequired
  }).isRequired,
  mediaDevice: PropTypes.object, // eslint-disable-line
  endCall: PropTypes.func.isRequired
};

export default CallWindow;
