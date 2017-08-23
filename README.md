# serverless-schedule-weather

Reference to https://github.com/serverless/examples/tree/master/aws-node-scheduled-weather

It is a serverless function to get weather info, and send emails by cron via AWS SES

## Setup

### DarkSky

Please visit https://darksky.net/dev/ to register for a free API token.

### SES

Please register the sender email in AWS SES.

### Configuration

Upon setting up access to both external services, you'll be required to update the environment variables in `config.json`:

```
{ 
    "accessKeyId": "xxxxxx", 
    "secretAccessKey": "xxxxxx", 
    "region": "us-east-1", 
    "sender": "xxx@gmail.com",
    "receipent": "xxx@gmail.com",
    "darkSkyApiKey": "xxxxxx"
}
```

## Deploy

In order to deploy the you endpoint simply run

```bash
serverless deploy
```

## Usage

To test your function remotely:

```bash
sls invoke -f weather  
```