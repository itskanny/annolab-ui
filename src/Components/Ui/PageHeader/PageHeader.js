import {PageHeader, Tag} from "antd";
import React from "react";
import {useHistory} from "react-router-dom";


const AnnolabPageHeader = ({tag, tagText, item, extras}) => {
    const history = useHistory()


    return (
        <>
            <PageHeader
                className="site-page-header an-border-radius"
                onBack={() => history.goBack()}
                title={item.name}
                tags={tag? <Tag color="blue">{tagText}</Tag> : null}
                subTitle={item.description}
                extra={[
                    ...extras
                ]
                }
            />
        </>
    )
}

export default AnnolabPageHeader