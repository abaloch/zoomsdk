// src/VideoSession.js

import React, { useEffect } from 'react';
import ZoomVideo from '@zoom/videosdk'; // Ensure you have the Zoom Video SDK imported

function VideoSession() {
  const config = {
    videoSDKJWT: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiREQxa2JQZVE1SVhJWUVPcVIzWXZGUjQ4cXBRaGhmbUZ6WEFiIiwicm9sZV90eXBlIjoxLCJ0cGMiOiJNeVNlc3Npb24iLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3Mzk0OTQ3NTcsImV4cCI6MTczOTQ5ODM1NywidXNlcl9pZGVudGl0eSI6IlVzZXIxMjMiLCJzZXNzaW9uX2tleSI6Im15U2Vzc2lvbktleSIsImdlb19yZWdpb25zIjoiVVMsQ0EiLCJjbG91ZF9yZWNvcmRpbmdfb3B0aW9uIjowLCJjbG91ZF9yZWNvcmRpbmdfZWxlY3Rpb24iOjF9.ziz2NkBhMSl62UKbAD6ZvE1cKraP1GXnEP9zlc2XRMs', // Replace with your actual JWT token
    sessionName: 'SessionA',
    userName: 'UserA',
    sessionPasscode: 'abc123',
    features: ['preview', 'video', 'audio', 'share', 'chat', 'users', 'settings'],
    options: { init: {}, audio: {}, video: {}, share: {} },
    virtualBackground: {
      allowVirtualBackground: true,
      allowVirtualBackgroundUpload: true,
      virtualBackgrounds: ['https://images.unsplash.com/photo-1715490187538-30a365fa05bd?q=80&w=1945&auto=format&fit=crop']
    }
  };

  useEffect(() => {
    const client = ZoomVideo.createClient();

    client.on('recording-change', () => {
        console.log('Recording status changed');
      });
  
      client.on('caption-status', () => {
        console.log('Caption status changed');
      });
  
      client.on('live-stream-status', () => {
        console.log('Live stream status changed');
      });

    async function joinSession() {
      const signature = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfa2V5IjoiREQxa2JQZVE1SVhJWUVPcVIzWXZGUjQ4cXBRaGhmbUZ6WEFiIiwicm9sZV90eXBlIjoxLCJ0cGMiOiJNeVNlc3Npb24iLCJ2ZXJzaW9uIjoxLCJpYXQiOjE3Mzk0OTQ3NTcsImV4cCI6MTczOTQ5ODM1NywidXNlcl9pZGVudGl0eSI6IlVzZXIxMjMiLCJzZXNzaW9uX2tleSI6Im15U2Vzc2lvbktleSIsImdlb19yZWdpb25zIjoiVVMsQ0EiLCJjbG91ZF9yZWNvcmRpbmdfb3B0aW9uIjowLCJjbG91ZF9yZWNvcmRpbmdfZWxlY3Rpb24iOjF9.ziz2NkBhMSl62UKbAD6ZvE1cKraP1GXnEP9zlc2XRMs'; // Replace with the JWT you obtained


      try {
        await client.join({
          signature: signature,
          topic: 'MySession',
          userName: 'User123',
          password: 'abc123'
        });
        console.log('Joined session successfully');
      } catch (error) {
        console.error('Error joining session:', error);
      }
    }

    joinSession();
  }, []);

  return (
    <div>
      {/* Your component code */}
    </div>
  );
}

export default VideoSession;