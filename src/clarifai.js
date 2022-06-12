/*!
 * Author : toilangthang
 * Purpose: This is functions for face detection via API
 * References:
 *  https://github.com/Clarifai/clarifai-nodejs-grpc
 *  https://docs.clarifai.com/api-guide/api-overview/api-clients/
 *  https://docs.clarifai.com/api-guide/predict/images/
 *  Import constant in JS:
 *   https://bobbyhadz.com/blog/javascript-export-constant#:~:text=Use%20named%20exports%20to%20export,as%20necessary%20in%20a%20file.
 */
const USER_ID = 'toilangthang';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '2effead5a0b6452da1b0654750f4ef5f';
const APP_ID = 'eb1b5e55ae204c42afbb7e88fe379513';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '45fb9a671625463fa646c3523a3087d5';
// Change this to whatever image URL you want to process
const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};

export {MODEL_ID, MODEL_VERSION_ID, requestOptions};