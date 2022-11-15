import  Router,{Request, Response} from "express";
import * as PageControllers  from '../controllers/pageControllers';
import * as SearchControllers  from '../controllers/searchControllers';
import * as LoginControllers  from '../controllers/loginControllers';


const router = Router();

router.get('/', PageControllers.home);
router.get('/dogs', PageControllers.dogs);
router.get('/cats', PageControllers.cats);
router.get('/fishes', PageControllers.fishes );
router.get('/search', SearchControllers.search);
router.post('/login', LoginControllers.login);

export default router;