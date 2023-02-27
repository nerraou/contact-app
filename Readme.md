MondoDB version

```
export MONGODB_VERSION=6.0-ubi8
```

Running MongoDB as a Docker Container

```
docker run --name mongodb  -p 27017:27017 -v /Users/nerraou/Desktop/mongo_data:/data/db -d   mongodb/mongodb-community-server:$MONGODB_VERSION
```

Connect to MongoDB Compass

```
mongodb://localhost:27017
```
