import React from 'react';

import { Instagram } from '../icons/Instagram';
import { Twitter } from '../icons/Twitter';
import { Facebook } from '../icons/Facebook';
import { Pinterest } from '../icons/Pinterest';
import { FooterContainer, IconsList, IconItem } from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <IconsList>
        <IconItem>
          <a href="https://www.instagram.com/">
            <Instagram />
          </a>
        </IconItem>
        <IconItem>
          <a href="https://twitter.com/">
            <Twitter />
          </a>
        </IconItem>
        <IconItem>
          <a href="https://www.facebook.com/">
            <Facebook />
          </a>
        </IconItem>
        <IconItem>
          <a href="https://www.pinterest.com/">
            <Pinterest />
          </a>
        </IconItem>
      </IconsList>
    </FooterContainer>
  );
};
export default Footer;
