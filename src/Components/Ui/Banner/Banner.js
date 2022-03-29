import {ReactComponent as Man} from "../../../images/man.svg";
import Stepper from "../Stepper/Stepper";
import {Link} from "react-router-dom";

const Banner = props => {

    return (
        <div className={'an-banner'}>

            <h2 className={'an-banner--type'}>{props.typeText}</h2>
            <h3 className={'an-banner--name'}>{props.name}</h3>
            <h4 className={'an-banner--tagline'}>{props.tagLine}</h4>


            <div className={'an-banner--action--wrapper'}>
                <p className={'an-banner--action--description'}>{props.actionDescription}</p>
                <p className={'an-banner--action--prefix'}>{props.actionPrefix}
                    {
                        !props.hasStepper ?
                            <Link to={props.actionLink}><span  className={'an-banner--action--link'}>{props.actionText}</span></Link>
                            : ""
                    }
                </p>
            </div>

            {props.hasStepper && <Stepper current={props.current}/>}

            <div className={'an-banner--image'}>
                <Man/>
            </div>
        </div>
    )
}

export default Banner