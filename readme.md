# tg-portal

A simple file uploader using multer and aws-sdk

## Routes
### POST /upload
- Handles a file upload form
- Example html:
```html
<html>
  <body>
    <form ref='uploadForm' 
      id='uploadForm' 
      action='http://localhost:7000/upload' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="inputFile" multiple />
        <input type='submit' value='Upload!' />
    </form>     
  </body>
</html>
```

## Create .env file and provide values for the following:
```
AWS_S3_BUCKET = 
AWS_ACCESS_KEY_ID = 
AWS_SECRET_ACCESS_KEY = 
AWS_DEFAULT_REGION = 
```