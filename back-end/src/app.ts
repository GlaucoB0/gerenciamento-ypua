import 'dotenv/config'
import cors from 'cors';
import express, {Response, Request} from 'express';
import router from './routes/router';

const app = express();

const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', router)

app.use("*", (req: Request, res: Response) => {
    res.status(404)
    res.json({message: "Rota não encontrada"})
})

app.listen(PORT, () => {
    console.log(`Server Open in Port => ${PORT}`);
})

export default app;