import express, {Response, Request} from 'express';
import 'dotenv/config'
import router from './routes/router';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("*", (req: Request, res: Response) => {
    res.status(404)
    res.json({message: "Rota não encontrada"})
})

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server Open in Port => ${PORT}`);
})

export default app;