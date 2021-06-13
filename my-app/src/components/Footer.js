import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAciton from '@material-ui/core/BottomNavigationAction';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Footer() {
    return (
        <BottomNavigation>
            <BottomNavigationAciton label="Facebook" icon={<FacebookIcon style={{fill: "#3B5998"}}/>}/>
            <BottomNavigationAciton label="Twitter" icon={<TwitterIcon style={{fill: "#1DA1F2"}}/>}/>
            <BottomNavigationAciton label="Instagram" icon={<InstagramIcon style={{fill: "#C13584"}}/>}/>
            <BottomNavigationAciton label="YouTube" icon={<YouTubeIcon style={{fill: "#c4302b"}}/>}/>
        </BottomNavigation>
        
    )
}

export default Footer
