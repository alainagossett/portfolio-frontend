import { StyledFooter } from '../styles'

function Footer() {
    return (
        <StyledFooter>
        <div>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            Alaina Gossett | <img className="footerImg" src="https://i.imgur.com/kpXSyl1.png" alt="gitHub logo" /> | &copy;2022

            </div>
        </div>
        </StyledFooter>
    )
}

export default Footer;