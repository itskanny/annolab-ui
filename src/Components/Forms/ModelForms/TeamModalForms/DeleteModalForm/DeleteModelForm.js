import React, {useState} from "react";
import {Button, Modal, Typography} from "antd";
import {openNotification} from "../../../../../helpers/helper";
import {TeamProvider} from "../../../../../providers/TeamProvider";

const { Text, Paragraph } = Typography

const DeleteModelForm = (props) => {

    const [isLoading, setIsLoading] = useState(false)

    const handleCancel = () => {
        Modal.destroyAll()
        props.setVisible({static: false, row: {}})
    };

    const handleOk = () => {
        setIsLoading(true)
        TeamProvider.deleteTeam(props.visible.row.id)
            .then(data => {
                if (!data.hasErrors){
                    props.setRender(Math.random())
                    openNotification('success', 'Team deleted successfully', true)
                    props.setVisible({static: false, row: {}})
                }
                else {
                    openNotification('error', 'Failed to delete Team', false)
                }

                setIsLoading(false)
                Modal.destroyAll()
            })
    };

    return (
        <>
            <Modal
                visible={props.visible.state}
                title={'Confirm Team Deletion'}
                closable={false}
                destroyOnClose={true}
                centered
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button danger key="submit" type="primary" loading={isLoading} onClick={handleOk}>
                        Yes! Delete
                    </Button>,
                ]}
            >
                <p>Are you sure you want to delete team named</p>

                <p><Text code >{props.visible.row.name} </Text> </p>

                <p className={'tw-mt-3'}>This action will also remove</p>
                <Paragraph>
                    <ul>
                        <li className={'tw-mt-2'}>
                            <Text code>Related team history</Text>
                        </li>
                        <li>
                            <Text code>Related user history</Text>
                        </li>
                    </ul>
                </Paragraph>

                <p>This action will be <Text type={"danger"}>Irreversible.</Text> Do you confirm?</p>

            </Modal>
        </>
    )

}

export default DeleteModelForm