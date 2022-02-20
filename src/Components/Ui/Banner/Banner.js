import {ReactComponent as Man} from "../../../images/man.svg";

const Banner = props => {

    return (
        <div className={'an-banner'}>

            <h2 className={'an-banner--type'}>{props.typeText}</h2>
            <h3 className={'an-banner--name'}>{props.name}</h3>
            <h4 className={'an-banner--tagline'}>{props.tagLine}</h4>
            <p className="an-banner--action--description">{props.stepperText}</p>
            <h4 className={'an-banner--tagline'}>{props.stepperDescription}</h4>
            <div className={'an-banner--action--wrapper'}>
            <p>1-Complete your profile{props.step1}</p>
            <p>2-Own your organization{props.step2}</p>
            <p>3-Create your first project{props.step3}</p>
            <p>4-Teams makes it a lot easier{props.step4}</p>
            <p>5-Add images to start anotating{props.step5}</p>

            </div>
            <div className={'an-banner--action--wrapper'}>
                <p className={'an-banner--action--description'}>{props.actionDescription}</p>
                <p className={'an-banner--action--prefix'}>{props.actionPrefix}<span to={props.actionLink} className={'an-banner--action--link'}>{props.actionText}</span></p>
            </div>

            <div className={'an-banner--image'}>
                <Man/>
            </div>
        </div>
    )
}

export default Banner