import PostBusiness from "./business/PostBusiness";
import UserBusiness from "./business/UserBusiness";
import { app } from "./controller/app";
import PostController from "./controller/PostController";
import UserController from "./controller/UserController";
import PostData from "./data/PostData";
import UserData from "./data/UserData";

const userBusiness = new UserBusiness(new UserData());
const userController = new UserController(userBusiness)

const postBusiness = new PostBusiness(new PostData())
const postController = new PostController(postBusiness)


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.use("/ping", pingRouter)
app.use("/users", userRouter)
app.use("/posts", postRouter)

app.post("/signup", userController.singUp )
app.post("/signup", userController.singUp )