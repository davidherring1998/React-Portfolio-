import React from "react";
import { AiOutlineGithub} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
const styles = {
  footer: {
    position: "sticky",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#292b2c",
    color: "white",
    textAlign: "center",
    height: "50px",
    padding: "10px",
  },
  icon: {
    paddingRight: '10px',
    paddingLeft: '10px'
  },
  name: {
    color: 'white',
    fontSize: '9px',
    paddingTop: '2px'
  }
};

function Footer() {
  return <footer style={styles.footer}>
    <a style={styles.icon} href="https://github.com/davidherring1998" target='blank'><AiOutlineGithub/></a>
    <a style={styles.icon} href="https://www.linkedin.com/in/david-herring-051bba241/" target='blank'><AiFillLinkedin/></a>
    <a style={styles.icon} href="https://stackoverflow.com/users/19333004/david-herring" target='blank'><BsStackOverflow/></a>
    <p style={styles.name}> &copy; Made with love..</p>
  </footer>;
}

export default Footer;
