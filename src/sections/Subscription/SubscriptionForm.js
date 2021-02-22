import {Form, Input, InputNumber, Button} from 'antd';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const SubscriptionForm = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Form {...layout}
              className={'am-subscription-form'}
              name="am-subscription-form"
              onFinish={onFinish}
              validateMessages={validateMessages}>
            <span>
      <Input
          type="text"
          name={'email'}
          placeholder="Enter your @email address"
          className={'am-form-input'}
      />
      <Button type="primary" htmlType="submit">
                    Submit
                </Button>
    </span>
        </Form>
    );
};

export default SubscriptionForm;