import React from 'react';
import PropTypes from 'prop-types';

function CallModal({ status, callFrom, startCall, rejectCall }) {
  const acceptWithVideo = (video) => {
    const config = { audio: true, video };
    return () => startCall(false, callFrom, config);
  };

  return (
    <div style={{ display: status === 'active' ? 'flex' : "none", flexDirection: 'column', gap: 12, backgroundColor: '#0f0f0f', padding: 24, borderRadius: 12, position: 'absolute' }}>
      <span style={{ color: '#f1f1f1', textOverflow: 'clip' }}>Звонок от собеседника
        <span style={{ display: 'block', fontSize: 16, fontWeight: 600, marginTop: 4 }}>{callFrom}</span></span>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={acceptWithVideo(true)}
        >    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40px" height="40px" viewBox="0 0 32 32" fill="green">
            <path class="blueprint_een" d="M26.146,0.745c-0.203-0.231-0.483-0.346-0.763-0.346c-0.283,0-0.566,0.119-0.765,0.358  l-5.904,7.084c-0.264,0.317-0.309,0.758-0.109,1.12c0.59,1.066,1.758,3.306,1.788,4.361c0.038,1.309-5.654,7.064-7.071,7.071  c-0.003,0-0.005,0-0.007,0c-1.058,0-3.287-1.18-4.352-1.78c-0.153-0.086-0.32-0.128-0.486-0.128c-0.229,0-0.456,0.079-0.64,0.233  L0.743,24.63c-0.457,0.381-0.489,1.083-0.055,1.49C3.961,29.187,7.279,31,11.201,31C15.444,31,31,15.444,31,11.201  C31,7.285,29.193,4.213,26.146,0.745z M25.396,2.948c0.412,0.498,0.771,0.973,1.105,1.438l-5.277,5.277  c-0.158-0.326-0.336-0.678-0.539-1.062L25.396,2.948z M8.592,20.693c0.382,0.206,0.733,0.385,1.058,0.544l-5.312,5.312  c-0.471-0.34-0.945-0.704-1.429-1.121L8.592,20.693z M21.277,21.277c-5.174,5.174-9.076,7.667-10.076,7.723  c-2.075,0-4.016-0.599-6.024-1.875l5.443-5.443c1.655,0.705,2.391,0.712,2.707,0.712c0.002,0,0.004,0,0.007,0  c0.492-0.003,1.988-0.01,5.828-3.983c3.282-3.396,3.248-4.578,3.232-5.145c-0.008-0.29-0.031-0.999-0.725-2.63l5.413-5.413  C28.431,7.312,29,9.152,29,11.193C28.944,12.202,26.451,16.104,21.277,21.277z" />
          </svg></button>
        <button
          className="hangup"
          onClick={rejectCall}
        >    <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" fill="red">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.27396 8.94048C3.01237 7.88621 6.8401 6 12 6C17.1599 6 20.9876 7.88621 22.726 8.94048C23.7251 9.54634 24.1355 10.6912 23.9609 11.7514L23.5032 14.5308C23.2353 16.157 21.704 17.2467 20.101 16.9518L17.6354 16.4982C16.5887 16.3056 15.8888 15.2984 16.0637 14.2365L16.2935 12.8413C15.7061 12.4933 14.3714 11.9088 12 11.9088C9.62863 11.9088 8.29388 12.4933 7.70655 12.8413L7.93635 14.2365C8.11123 15.2984 7.41126 16.3056 6.36463 16.4982L3.89895 16.9518C2.29601 17.2467 0.764683 16.157 0.49684 14.5308L0.0390736 11.7514C-0.135542 10.6912 0.274923 9.54635 1.27396 8.94048ZM12 7.96961C7.30768 7.96961 3.82761 9.68804 2.2745 10.6299C2.04751 10.7676 1.8986 11.061 1.95897 11.4276L2.41674 14.207C2.50602 14.749 3.01646 15.1123 3.55077 15.014L6.01645 14.5603L5.76984 13.063C5.66906 12.4511 5.85834 11.6997 6.51793 11.2691C7.34118 10.7317 9.06148 9.93922 12 9.93922C14.9385 9.93922 16.6588 10.7317 17.4821 11.2691C18.1417 11.6997 18.3309 12.4511 18.2302 13.063L17.9836 14.5603L20.4492 15.014C20.9835 15.1123 21.494 14.749 21.5833 14.207L22.041 11.4276C22.1014 11.061 21.9525 10.7676 21.7255 10.6299C20.1724 9.68804 16.6923 7.96961 12 7.96961Z" />
          </svg></button>
      </div>
    </div>
  );
}

CallModal.propTypes = {
  status: PropTypes.string.isRequired,
  callFrom: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired,
  rejectCall: PropTypes.func.isRequired
};

export default CallModal;
