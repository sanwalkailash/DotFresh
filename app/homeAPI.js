/**
 * Created by kailash on 27/10/16.
 */

module.exports = function () {

    return {
        listUsres:function (req,res) {
            try {
                res.json(
                    [
                        {"title":"Rajma","price":221,"imgUrl":"images/k.jpg","profileID":" 0077","heathRating":"5"},
                        {"title":"Rajma","price":221,"imgUrl":"images/k.jpg","profileID":" 0077","heathRating":"5"},
                        {"title":"Rajma","price":221,"imgUrl":"images/k.jpg","profileID":" 0077","heathRating":"5"},
                        {"title":"Rajma","price":221,"imgUrl":"images/k.jpg","profileID":" 0077","heathRating":"5"},
                        {"title":"Rajma","price":221,"imgUrl":"images/k.jpg","profileID":" 0077","heathRating":"5"},
                    ]
                );
            } catch (e) {
                console.trace(e);
            }

        }
    }
};




