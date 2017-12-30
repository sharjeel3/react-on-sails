/**
 * Created by sharjeel on 30/12/17.
 */

module.exports = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else{
        return res.redirect('/login');
    }
};
