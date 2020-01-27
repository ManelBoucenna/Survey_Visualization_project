from flask import Flask
from flask import render_template
from pymongo import MongoClient
import json
from bson import json_util
from bson.json_util import dumps

app = Flask(__name__)

MONGODB_HOST = 'localhost'
MONGODB_PORT = 27017
DBS_NAME = 'cses_small'
COLLECTION_NAME = 'master'
FIELDS = {'_id': False}

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/cses_small/master")
def cseSmall_master():
    connection = MongoClient(MONGODB_HOST, MONGODB_PORT)
    collection = connection[DBS_NAME][COLLECTION_NAME]
    masters = collection.find(projection=FIELDS)
    json_masters = []
    for master in masters:
        json_masters.append(master)
    json_masters = json.dumps(json_masters, default=json_util.default)
    connection.close()
    return json_masters
    
if __name__ == "__main__":
    app.run(host='0.0.0.0',port=5000,debug=True)
