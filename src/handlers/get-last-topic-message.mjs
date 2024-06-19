import { IoTClient } from '@aws-sdk/client-iot'

const client = new IoTClient({ region: 'us-east1', endpoint: 'test'})

export const getLastTopicMessageHandler = async (event) => {
    client.send()
    const response = {
        statusCode: 200,
        body: JSON.stringify(items)
    };

    return response;
}