import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialSharing = (props) => {
  const { url, text } = props;

  const handleFacebookClick = () => {
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(fbShareUrl, '_blank');
  };

  const handleTwitterClick = () => {
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterShareUrl, '_blank');
  };

  const handleEmailClick = () => {
    const emailSubject = `Check out my trip plans: ${url}`;
    const emailBody = `Hey,\n\nI wanted to share my trip plans with you. Check them out at ${url}.\n\n${text}`;
    const emailHref = `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = emailHref;
  };

  return (
    <div>
      <FaFacebook onClick={handleFacebookClick} />
      <FaTwitter onClick={handleTwitterClick} />
      <FaEnvelope onClick={handleEmailClick} />
    </div>
  );
};

export default SocialSharing;
