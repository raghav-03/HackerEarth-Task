var Router = require('router');
var router = Router();
var homecontroller=require('../controller/homecontroller');

router.get('/',homecontroller.home);
router.post('/',homecontroller.addimg);
router.put('/:id/edit',homecontroller.editimg);
router.delete('/delete/:id',homecontroller.deleteimg);
router.get('/show/:id',homecontroller.showoneimg);
module.exports=router;