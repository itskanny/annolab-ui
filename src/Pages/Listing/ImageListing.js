import React from "react";

import {IMAGE_COLUMNS} from "../../constants/TableColumns/TableColumns";
import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ImageProvider} from "../../providers/ImageProvider";


const ImageListing = (props) => {

    return (

        <>
            <ListPage title={props.proj.name} tableType={'All Images'} buttonText={'Add Images'} columns={IMAGE_COLUMNS} fetcher={() => ImageProvider.fetchImages(props.proj.id)}/>
        </>
    )
};

export default ImageListing;