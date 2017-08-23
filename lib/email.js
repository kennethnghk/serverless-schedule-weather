'use strict';

// load aws sdk
const aws = require('aws-sdk');

// load aws config
aws.config.loadFromPath('config.json');

// load AWS SES
const ses = new aws.SES({apiVersion: '2010-12-01'});

module.exports = (to, subject, body) => {

  return new Promise((resolve, reject) => {

    // this sends the email
    // @todo - add HTML version
    ses.sendEmail( { 
      Source: process.env.SES_SENDER, 
      Destination: { 
        ToAddresses: [to] 
      },
      Message: {
          Subject: {
            Data: subject
          },
          Body: {
              Text: {
                  Data: JSON.stringify(body),
              }
          }
      }
    }
    , function(err, data) {
      if(err) throw err
          console.log('Email sent:');
          console.log(data);
    });
  });
};
