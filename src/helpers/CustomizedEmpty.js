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
                height={200}
                width={200}
            />
            <p>{props.description}</p>
        </Empty>
    )
}

export default CustomizedEmpty