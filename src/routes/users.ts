import express, {Request, Response} from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response) {
    const users =[ {
        id: 1, 
        name: 'david'
    }, {
        id: 2, 
        name: 'smith'
    }
]
  res.send(users);
});

export default router 