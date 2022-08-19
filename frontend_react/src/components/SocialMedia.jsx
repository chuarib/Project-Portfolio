import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chuarib/">
          <FaLinkedin />
        </a>
    </div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/chuarib">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/chuarib/">
        <BsInstagram />
      </a>
    </div>
</div>
  )
}

export default SocialMedia