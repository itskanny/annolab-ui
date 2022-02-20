import {Popover, Steps} from "antd";

const Stepper = props => {
    const {Step} = Steps;

    const customDot = (dot, {status, index}) => (
        <Popover
            content={
                <span>
                    Step: {index + 1}, Progress: {status}
                </span>
            }
        >
            {dot}
        </Popover>
    );

    return (
        <>
            <p>After these steps you can start using AnnoLab</p>
            <div className={'tw-hidden md:tw-block'}>
                <Steps direction="vertical" size="small" current={props.current} progressDot={customDot}>
                    <Step title="Profile"/>
                    <Step title="Organization"/>
                    <Step title="Project"/>
                    <Step title="Team"/>
                    <Step title="Images"/>
                </Steps>
            </div>
            <div className={'md:tw-hidden'}>
                <Steps size="small" current={props.current} progressDot={customDot}>
                    <Step title="Profile"/>
                    <Step title="Organization"/>
                    <Step title="Project"/>
                    <Step title="Team"/>
                    <Step title="Images"/>
                </Steps>
            </div>
        </>
    )
}

export default Stepper