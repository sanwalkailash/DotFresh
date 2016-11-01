/**
 * Created by kailash on 27/10/16.
 */

module.exports = function () {

    return {
        listUsres : function (req,res) {
            res.json(
                {"user":
                    {
                        "imgUrl":null,
                        "name":null,
                        "surName":null,
                        "profileID":null,
                        "address":{
                            "state":null,
                            "city":null,
                            "country":null,
                            "postalcode":0,
                            "countrycode":0,
                            "statecode":0,
                        },
                        "attendeddate":null,
                        "monumber":0,
                        "nextvisitDate":null,
                        "status":null,
                        "address":null,
                        "age":0,
                        "future1":null,
                        "lastVisit":null,
                        "visitRecords":null
                    }
                }

            )
        }
    }
};




