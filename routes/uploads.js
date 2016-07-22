var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'upload/'});

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	console.log('reached GET /upload/');
    res.render('upload');
});

router.post('/', upload.single('recfile'), function (req, res) {
    var tmp = req.file.path;
    var name = req.file.originalname;

    var tmpstr = './uploads/vtewari/' + name;

    var src = fs.createReadStream(tmp);
    var dest = fs.createWriteStream(tmpstr);

    src.pipe(dest);
    src.on('end', function() { res.render('complete'); });
    src.on('error', function(err) { res.render('error'); });

});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;
