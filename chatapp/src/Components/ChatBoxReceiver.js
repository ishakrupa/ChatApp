import React from 'react';
import { Avatar, Image } from 'antd';

export default function ChatBoxReceiver({ avatar, user, message }) {
  console.log('ChatBoxReceiver - avatar:', avatar, 'user:', user, 'message:', message);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
      <Avatar size={70} src={<Image src={avatar} style={{ objectFit: 'cover', width: 45, height: 45, borderRadius: '100%' }} preview={false} />} />
      <p style={{ paddingLeft: 6, backgroundColor: 'greenyellow', borderRadius: 6, width: '15%', textAlign: "left" }}>
        <strong style={{ fontSize: 13 }}>{user}</strong>
        <br />
        {typeof message === 'object' ? JSON.stringify(message) : message}
      </p>
    </div>
  );
}

export function ChatBoxSender({ avatar, user, message }) {
  console.log('ChatBoxSender - avatar:', avatar, 'user:', user, 'message:', message);

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
      <Avatar size={70} src={<Image src={avatar} style={{ objectFit: 'cover', width: 45, height: 45, borderRadius: '100%' }} preview={false} />} />
      <p style={{ paddingLeft: 15, backgroundColor: 'white', borderRadius: 6, width: '10%', textAlign: "left" }}>
        <strong style={{ fontSize: 13 }}>{user}</strong>
        <br />
        {typeof message === 'object' ? JSON.stringify(message) : message}
      </p>
    </div>
  );
}
