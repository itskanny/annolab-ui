import {Card, Divider} from "antd";
import ImageList from "./ImageList";

const ListCard = ({proj, img}) => {

    return (
        <>
            <Card className={'tw-mx-7 tw-my-5'}>
                <h3 className={'tw-font-semibold tw-text-lg'}>Project Images</h3>

                <Divider/>
                <ImageList proj={proj}/>

            </Card>
        </>
    )
}

export default ListCard