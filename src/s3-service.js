const AWS = require('aws-sdk')
const fs = require('fs')
const secrets = require('./config')

function createS3Instance(){
    const s3 = new AWS.S3({
        credentials:{
            accessKeyId: secrets.awsCreds.accessKey,
            secretAccessKey: secrets.awsCreds.secretKey
        },
        region:'eu-west-2'
    })
    return s3
}

async function uploadFileToS3(fileObj, bucketName){
    //console.log({fileObj})
    const s3 = createS3Instance()
    const fileStream = fs.createReadStream(fileObj.filepath)
    const params = {
        Body: fileStream,
        Bucket: bucketName,
        Key: fileObj.originalFilename
    }
    const uploadData = await s3.upload(params).promise()
    return uploadData;
}

module.exports = {
    uploadFileToS3
}