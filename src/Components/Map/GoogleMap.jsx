import React from 'react';

const GoogleMap = () => {
  return (
    <div style={{ height: '450px', width: '100%' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7918.613921059126!2d79.98476904999998!3d7.09037175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fbc1e28292b7%3A0xe921f2ae7dbd1b14!2sPahalagama%2C%20Gampaha!5e0!3m2!1sen!2slk!4v1717555573243!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
