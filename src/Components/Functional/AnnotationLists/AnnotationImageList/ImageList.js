import {Avatar, ConfigProvider, Divider, Input, List, Skeleton} from "antd";
import CustomizedEmpty from "../../../../helpers/CustomizedEmpty";
import animationData from "../../../../images/lotties/no-data.json";
import {useCallback, useEffect, useState} from "react";
import {ImageProvider} from "../../../../providers/ImageProvider";
import {openNotification} from "../../../../helpers/helper";


const ImageList = ({proj}) => {

    const [images, setImages] = useState([])
    const [filtered, setFiltered] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearch = (event) => {
        setFiltered(images.filter(image => image.name.includes(event.target.value)))
    }


    const fetchImages = useCallback(() => {
        setLoading(true)
        ImageProvider.fetchImages(proj.id)
            .then(data => {
                if (!data.hasErrors) {
                    setImages(data.data)
                    setFiltered(data.data)
                } else {
                    openNotification('error', 'Error getting images', false)
                }
                setLoading(false)
            })

    }, [proj.id])



    useEffect(() => {
        fetchImages()
    }, [fetchImages])

    return (
        <>
            <div className={'tw-mb-5'}>
                <Input size={"middle"} placeholder={'Search Project'} onChange={handleSearch}/>
            </div>

            <div className={'an-wrapper tw-max-h-[450px]'}>
                {
                    loading ?
                        <div className={'list-skeleton'}>
                            <Skeleton avatar paragraph={{rows: 0}} active/>
                            <Divider className={'tw-m-0 tw-mb-2'}/>
                            <Skeleton avatar paragraph={{rows: 0}} active/>
                            <Divider/>
                            <Skeleton avatar paragraph={{rows: 0}} active/>
                        </div>
                        :
                        <ConfigProvider renderEmpty={() => (
                            <CustomizedEmpty
                                description={'No Project found for the organization'}
                                lottieAnimation={animationData}
                                height={185}
                                width={205}

                            />)}
                        >

                            <List

                                dataSource={filtered}
                                renderItem={(item => {
                                    return (
                                        <List.Item>
                                            <div className={'tw-flex tw-items-center'}>
                                                <Avatar src={item.image} shape={"square"}
                                                        size={"large"}/>
                                                <p className={'tw-m-0 tw-ml-4 tw-text-gray-800 tw-cursor-pointer hover:tw-underline'}>{`${item.name}`}</p>
                                            </div>
                                        </List.Item>
                                    )
                                })}
                            >

                            </List>
                        </ConfigProvider>

                }
            </div>
        </>
    )
}

export default ImageList