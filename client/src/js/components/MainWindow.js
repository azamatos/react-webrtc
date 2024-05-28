import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { socket } from '../communication';
import { App, Button, Input, Popover } from 'antd';

function useClientID() {
  const [clientID, setClientID] = useState('');

  useEffect(() => {
    socket
      .on('init', ({ id }) => {
        document.title = `${id} - VideoCall`;
        setClientID(id);
      });
  }, []);

  return clientID;
}

function MainWindow({ startCall }) {
  const clientID = useClientID();
  const [friendID, setFriendID] = useState(null);
  const [open, setOpen] = useState(false)

  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <App className="container main-window">
      <h4 style={{ fontWeight: 500 }}>Ваш ID для звонка:
        <Popover
          onOpenChange={(value) => setOpen(value)}
          trigger="hover"
          open={open} title="Кликните чтобы скопировать"
          placement='bottomRight'
        >
          <span
            style={{ fontWeight: 700, fontSize: 24, paddingLeft: 8, cursor: 'pointer' }}
            onClick={() => {
              if (typeof navigator !== 'undefined') {
                navigator?.clipboard.writeText(clientID)
              }
            }}>
            {clientID}
          </span>
        </Popover>
      </h4>

      <svg height="150px" width="150px" version="1.1" id="Layer_1" viewBox="0 0 512 512" >
        <g>
          <g>
            <g>
              <path fill="#231F20" d="M453.523,38.777H58.477C26.233,38.777,0,65.01,0,97.254c0,8.669,0,230.264,0,241.81     c0,32.244,26.233,58.477,58.477,58.477h122.667l-6.301,36.698h-39.696c-10.765,0-19.492,8.727-19.492,19.492     s8.727,19.492,19.492,19.492c11.424,0,229.887,0,241.706,0c10.765,0,19.492-8.727,19.492-19.492s-8.727-19.492-19.492-19.492     h-39.696l-6.301-36.698h122.667c32.246,0,58.477-26.233,58.477-58.477c0-11.759,0-233.55,0-241.81     C512,65.01,485.768,38.777,453.523,38.777z M214.398,434.238l6.301-36.698h70.603l6.301,36.698H214.398z M473.015,339.064     c0,10.748-8.743,19.492-19.492,19.492c-9.504,0-385.85,0-395.046,0c-10.748,0-19.492-8.744-19.492-19.492v-8.694h434.03V339.064z      M473.015,291.385H38.985V97.254c0-10.748,8.744-19.492,19.492-19.492h395.046c10.749,0,19.492,8.744,19.492,19.492V291.385z" />
              <path fill="#231F20" d="M321.94,152.991l-23.859,13.775v-12.708c0-10.765-8.727-19.492-19.492-19.492h-88.313     c-10.765,0-19.492,8.727-19.492,19.492v61.031c0,10.765,8.727,19.492,19.492,19.492h88.313c10.765,0,19.492-8.727,19.492-19.492     v-12.709l23.859,13.775c8.548,4.935,19.277-1.241,19.277-11.13v-40.905C341.217,154.25,330.504,148.046,321.94,152.991z" />
            </g>
          </g>
        </g>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', }}>
        <Input
          type="text"
          variant='outlined'
          className="txt-clientId"
          spellCheck={false}
          placeholder="Введите ID вашего собеседника"
          onChange={(event) => setFriendID(event.target.value)}
          size='large'
        />
        <div>
          <Button type="primary" onClick={callWithVideo(true)}>
            Позвонить
          </Button>

        </div>
      </div>
    </App >
  );
}

MainWindow.propTypes = {
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
