import {notification} from "antd";
import {EmojiHappy, EmojiSad} from "iconsax-react";

export const openNotification = (type, message, success) => {
    notification.open({
        type: type,
        message: success ? "Successful" : "Failed",
        description: message,
        icon: success ? <EmojiHappy /> : <EmojiSad />,
    });
};

export const handleFormErrors = (data,form, setNonFieldErrorMessage, setNonFieldVisible) => {
    if (data.status === 400) {
        form.setFields(
            Object.keys(data.data).map((field) => {
                if (field === 'non_field_errors'){
                    setNonFieldErrorMessage(data.data[field])
                    setNonFieldVisible(true)
                    return {}
                }else {
                    return {
                        name: field,
                        errors: data.data[field],
                    };
                }

            })
        );
    }
    else {
        openNotification(
            "error",
            data.status < 500 ? data.data.detail : "Some Internal error occurred",
            false
        );
    }
}