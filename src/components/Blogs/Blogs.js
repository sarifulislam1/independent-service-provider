import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-start mt-5 p-3 w-50'>
            <div>
                <h3>Difference between authorization and authentication?</h3>
                <p>Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
            </div>
            <div>
                <h3>
                    Why are you using firebase? What other options do you have to implement authentication?
                </h3>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency.There are many services which Firebase provides, Most useful of them are : 1.Cloud Firestore
                    2.Cloud Functions
                    3.Hosting
                    4.Cloud Storage
                    5.Google Analytics
                    6.Predictions
                    7.Cloud Messaging
                    8.Dynamic Links
                    9.Remote Confi</p>
            </div>
        </div>
    );
};

export default Blogs;