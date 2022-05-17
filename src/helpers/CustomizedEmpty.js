import {Empty} from "antd";
import Lottie from "react-lottie";

const CustomizedEmpty = props => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.lottieAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <Empty
            className={'empty-custom'}
            image={null}
            description={null}
        >
            <Lottie
                options={defaultOptions}
                height={props.height}
                width={props.width}
            />
            <p className={`tw-font-semibold tw-mt-5 ${props.textStyles}`}
            >{props.description}</p>
        </Empty>
    )
}

export default CustomizedEmpty