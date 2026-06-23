# 🎯 BURAK CODE - NIMA UCHUN? (WHY COMMENTS)

## 1️⃣ PACKAGE.JSON - NIMA UCHUN BU DEPENDENCIES?

```json
{
  "name": "burak",
  "version": "1.0.0",
  "description": "This is bruk project backend",
  "main": "src/server.ts",

  "scripts": {
    // Start - Production holatida server ishga tushirish
    "start": "tsx src/server.ts",

    // start:dev - Development holatida auto-restart bilan
    "start:dev": "nodemon --exec tsx -r dotenv/config src/server.ts",
    // Nima uchun: Kod o'zgarganda server avtomatik restart bo'lsin diye

    // train - Separate training script
    "train": "nodemon --exec tsx src/train.ts",

    // build - TypeScript -> JavaScript aylantiirish
    "build": "tsc",

    "test": "echo \"Error: no test specified\" && exit 1"
  },

  "dependencies": {
    // bcryptjs - Parolni shifrlash (Xavfsizlik uchun!)
    "bcryptjs": "^2.4.3",
    // Nima uchun: Plain text parol saqlanmaydi, hashed qilinadi
    // Login'da: bcrypt.compare(user_input, hashed) → TRUE/FALSE

    // connect-mongodb-session - Express-session'ni MongoDB'da saqlash
    "connect-mongodb-session": "^3.1.1",
    // Nima uchun: Server restart bo'lsa ham session data lost bo'lmasin
    // Session = User login status, shopping cart, preferences, etc

    // dotenv - Environment variables (.env fayldan)
    "dotenv": "^16.0.0",
    // Nima uchun: Passwords, DB URL, secrets ko'rgu ko'p bo'lmasin
    // .env file'da saqla: MONGO_URL, SESSION_SECRET, PORT

    // ejs - Server-side template engine (HTML rendering)
    "ejs": "^6.0.1",
    // Nima uchun: Admin panel (SSR) uchun HTML + data merge
    // Misol: res.render("products.ejs", {products: data})
    //        EJS file'da: <%= products.map(p => p.name) %>

    // express - Web framework (HTTP server)
    "express": "^4.17.3",
    // Nima uchun: REST API yaratish, routing, middleware

    // express-session - Session management
    "express-session": "^1.17.3",
    // Nima uchun: req.session'ni set/get qilish
    // Misol: req.session.member = {nick, type} → Login bo'ldi

    // moment - Date/Time manipulation
    "moment": "^2.29.4",
    // ⚠️ ISHLATILMAYDI! O'chirish kerak

    // mongodb - MongoDB driver
    "mongodb": "^3.2.6",
    // Nima uchun: Database connection va queries

    // mongoose - MongoDB ODM (Object-Document Mapper)
    "mongoose": "^6.2.9",
    // Nima uchun: Schema definition, validation, easy queries
    // Misol: memberModel.find(), productModel.create()

    // morgan - HTTP logging middleware
    "morgan": "^1.10.0",
    // Nima uchun: Har bir request'ni log qilish (Debug uchun)
    // Console'da ko'rinadi: GET /admin/product/all [200] 45ms

    // multer - File upload middleware
    "multer": "^1.4.5-lts.1",
    // Nima uchun: Rasmlarni upload qilish (Profile pic, product images)
    // req.file yoki req.files'da file data

    // uuid - Unique ID generator
    "uuid": "^14.0.0"
    // ⚠️ ISHLATILMAYDI! O'chirish kerak
  },

  "devDependencies": {
    // TypeScript types uchun
    "@types/bcryptjs": "^2.4.6",
    "@types/express": "^4.17.3",
    "@types/express-session": "^1.19.0",
    "@types/morgan": "^1.9.10",
    "@types/multer": "^2.1.0",
    "@types/uuid": "^11.0.0",

    // nodemon - File change'ni detect qilish va restart
    "nodemon": "^3.0.2",
    // Nima uchun: Development'da code o'zgarganda server restart bo'lsin

    // TypeScript compiler
    "typescript": "^5.2.2",
    // Nima uchun: .ts files'ni .js'ga o'girish

    // tsx - TypeScript executor (nodemon bilan ishlatiladi)
    "tsx": "^4.22.3"
    // Nima uchun: TypeScript'ni directly run qilish (tsc kerak emas)
  }
}
```

---

## 2️⃣ SERVER.TS - MONGODB CONNECTION

```typescript
import "dotenv/config";
// ✅ Nima uchun: .env file'dan MONGO_URL, SESSION_SECRET, PORT o'qish uchun
//    Login qutin ko'rgu ko'p bo'lmasin (security)

import mongoose from "mongoose";
// ✅ Nima uchun: MongoDB'ga ulanish uchun driver

import app from "./app";
// ✅ Nima uchun: Express app instance'ni import qilish
//    (app.ts'da barcha middleware va router configure qilindi)

mongoose
  .connect(
    process.env.MONGO_URL as string,
    {},
  )
  // ✅ MONGO_URL: .env file'dan o'qiladi
  //    Misol: mongodb://localhost:3003/burak
  // ✅ {} = Connection options (empty, default qilingan)

  .then((data) => {
    // ✅ Nima uchun: Connection muvaffaqiyat bo'lsa

    console.log(
      "MongoDB connection secceed",
    );
    // ⚠️ TYPO: "secceed" → "succeeded" bo'lishi kerak

    const PORT =
      process.env.PORT ?? 3003;
    // ✅ Nima uchun: PORT'ni .env dan o'qish, default 3003

    app.listen(PORT, function () {
      // ✅ Nima uchun: Express server'ni PORT'da ishga tushirish
      console.info(
        `The server is running successfully on port: ${PORT}`,
      );
      console.info(
        `Admin project on http://localhost:${PORT}/admin\n`,
      );
    });
  })

  .catch((err) =>
    console.log(
      "ERROR on connection MongoDB",
      err,
    ),
  );
// ❌ Muammo: Error log qilib, hecha qilmaydi
//    Server crash bo'ladi ayniyat
//    ✅ Fix: Retry logic qo'shish kerak
```

---

## 3️⃣ APP.TS - 4 TA QISMI

### QISM 1: ENTRANCE (Kirish)

```typescript
const app = express();
// ✅ Nima uchun: Express app instance yaratish
//    Bu app'da middleware va router'lar add qilish

console.log("__dirname:", __dirname);
// ✅ Nima uchun: Public file'lar joylashgani path'ni bilish
//    Misol: /Users/sanjar/BURAK/src/public/

app.use(
  express.static(
    path.join(__dirname, "public"),
  ),
);
// ✅ Nima uchun: Static files (CSS, JS, images) serve qilish
//    /public/style.css → Browser'da avtomatik available bo'ladi
//    GET /style.css → /public/style.css'dan olinadi

app.use(
  express.urlencoded({
    extended: true,
  }),
);
// ✅ Nima uchun: HTML form data'ni parse qilish
//    <form> submit bo'lganda: application/x-www-form-urlencoded
//    req.body = {memberNick: "test", memberPassword: "123"}

app.use(express.json());
// ✅ Nima uchun: JSON data'ni parse qilish
//    Client fetch() -> Content-Type: application/json
//    req.body = parsed JSON object

app.use(morgan(MORGAN_FORMAT));
// ✅ Nima uchun: Har bir request'ni log qilish
//    Console'da ko'rinadi: POST /admin/login [200] 45ms
//    Debug'da nima ishlanayotgani bilish uchun
```

### QISM 2: SESSIONS (Login status)

```typescript
const MongoDBStore =
  ConnectMongoDB(session);
// ✅ Nima uchun: Express-session'ni MongoDB'da saqlash uchun
//    Har safar server start/stop bo'lsa ham session data saqlanib qoladi

const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  // ✅ MongoDB'ga connect

  collection: "sessions",
  // ✅ Nima uchun: sessions collection'da session data saqlash
  //    Misol: db.sessions = [{_id: "abc123", session: {member: {...}}}]
});

app.use(
  session({
    secret: String(
      process.env.SESSION_SECRET,
    ),
    // ✅ Nima uchun: Session cookie'ni encrypt qilish uchun
    //    .env'da saqlanadi (secret, gumoniy bo'lmaydi)

    cookie: {
      maxAge: 1000 * 3600 * 6, // 6 soat
      // ✅ Nima uchun: Session cookie 6 soat bo'lsa, keyin login kerak
      //    (Security: user ko'p vaqt logout bo'lmasin diye)
    },

    store: store,
    // ✅ Nima uchun: Session data MongoDB'da saqlash

    resave: true,
    // ⚠️ Har safar unchanged session'ni qayta saqlash
    //    ❌ Performance'ga zararli

    saveUninitialized: true,
    // ⚠️ Bo'sh session'larni ham saqlash (Wasting DB storage)
  }),
);

app.use(function (req, res, next) {
  // ✅ Nima uchun: Session'dagi member data'ni res.locals'ga qo'yish
  //    EJS template'larda member.memberNick ishlatish uchun

  const sessionInstance =
    req.session as T;
  res.locals.member =
    sessionInstance.member;
  // ✅ res.locals.member = {memberNick: "restoran123", ...}
  // ✅ EJS file'da: <%= member?.memberNick %>

  next();
  // ✅ Request continue qilish
});
```

### QISM 3: VIEWS (Template Engine)

```typescript
app.set(
  "views",
  path.join(__dirname, "views"),
);
// ✅ Nima uchun: EJS file'lar joylashgani path
//    /views/*.ejs file'lari

app.set("view engine", "ejs");
// ✅ Nima uchun: Template engine = EJS
//    res.render("products") → /views/products.ejs render qiladi
```

### QISM 4: ROUTERS (Marshrutlar)

```typescript
app.use("/admin", routerAdmin);
// ✅ Nima uchun: /admin/... route'lar uchun routerAdmin ishlatiladi
//    GET /admin/login → restaurantController.getLogin
//    (Server-side rendering - EJS templates)

app.use("/", router);
// ✅ Nima uchun: / boshidan boshlanuvchi route'lar
//    (React SPA uchun - JSON response)
```

---

## 4️⃣ ROUTER-ADMIN.TS - ROUTE DEFINITIONS

```typescript
import express from "express";
const routerAdmin = express.Router();
// ✅ Nima uchun: /admin/* route'lar uchun router yaratish

import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
// ✅ Nima uchun: Controller'lar va Multer import qilish

/** Restaurant Routes */

routerAdmin.get(
  "/",
  restaurantController.goHome,
);
// ✅ Nima uchun: GET /admin → Home page (Login form ichma-ich)

routerAdmin.get(
  "/login",
  restaurantController.getLogin,
);
// ✅ Nima uchun: GET /admin/login → Login page render qilish

routerAdmin.post(
  "/login",
  restaurantController.processLogin,
);
// ✅ Nima uchun: POST /admin/login → Form submit → Check memberNick & password
//    req.body = {memberNick, memberPassword}
//    Agar OK → Session'ga save → Redirect /admin/product/all

routerAdmin.post(
  "/signup",
  makeUploader("members").single(
    "memberImage",
  ),
  restaurantController.processSignup,
);
// ✅ Nima uchun: POST /admin/signup
//    - Multer: "memberImage" file upload (1 ta rasm)
//    - "members" folder'da saqlash
//    - Keyin processSignup() controller'ga o'tish
//    - req.file.path = "/uploads/members/123-image.jpg"

/** Product Routes */

routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  // ✅ Nima uchun: Middleware - Check req.session.member.memberType === RESTAURANT
  //    Agar yo'q → Redirect /admin/login
  //    Agar ha → req.member = session.member, next()

  productController.getAllProducts,
);
// ✅ Nima uchun: ProductModel.find() → Barcha product'larni ol
//    res.render("products", {products})

routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  // ✅ Nima uchun: Himoya - Faqat login qilgan restaurant yaratsin

  makeUploader("products").array(
    "productImages",
    5,
  ),
  // ✅ Nima uchun: Multer - max 5 ta rasm upload qilish
  //    "productImages" input field
  //    /uploads/products/ folder'da saqlash
  //    req.files = [File1, File2, File3]

  productController.createNewProduct,
);
// ✅ Nima uchun: req.files -> path'lar extract qilish
//    ProductModel.create({..., productImages: [paths]})

routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct,
);
// ✅ Nima uchun: POST /admin/product/123 → id=123 bo'lgan product update
```

---

## 5️⃣ CONTROLLERS - BUSINESS LOGIC

### RESTAURANT CONTROLLER

```typescript
restaurantController.processLogin =
  async (
    req: AdminRequest,
    res: Response,
  ) => {
    try {
      console.log("processLogin");
      // ✅ Debug - Bu method ishga tushdi diye bilish

      console.log(
        "req.body:",
        req.body,
      );
      // ✅ Debug - Nima keldi diye bilish

      const input: LoginInput =
        req.body;
      // ✅ Nima uchun: req.body'ni type-safe qilish
      //    {memberNick: "restoran123", memberPassword: "pass123"}

      const result =
        await memberService.processLogin(
          input,
        );
      // ✅ Nima uchun: Service'ga delegate qilish
      //    - memberModel.findOne()
      //    - bcrypt.compare() password
      //    - Return: Member object
      // TODO: SESSIONS AUTHENTICATION

      req.session.member = result;
      // ✅ Nima uchun: Session'ga member data saqlash
      //    req.session.save() bo'lguncha memory'da

      req.session.save(function () {
        // ✅ Nima uchun: Session'ni MongoDB'ga saqlash
        //    Keyin browser cookie'ga set bo'ladi

        res.redirect(
          "/admin/product/all",
        );
        // ✅ Nima uchun: Login successful → Product page'ga olib o'tish
      });
    } catch (err) {
      console.log(
        "Error, processLogin:",
        err,
      );
      // ❌ Nima uchun: Error bo'lsa

      const message =
        err instanceof Errors
          ? err.message
          : Message.SOMETHING_WENT_WRONG;
      // ✅ Nima uchun: Custom error yoki generic message

      res.send(
        `<script> alert("${message}"); window.location.replace('/admin/login') </script>`,
      );
      // ✅ Nima uchun: Browser'da alert qilish va login page'ga qaytarish
    }
  };

restaurantController.verifyRestaurant =
  (
    req: AdminRequest,
    res: Response,
    next: NextFunction,
  ) => {
    // ✅ Nima uchun: Middleware - Protected route'lar uchun

    if (
      req.session?.member
        ?.memberType ===
      MemberType.RESTAURANT
    ) {
      // ✅ Check: Session'da member bormi? memberType = RESTAURANT?

      req.member = req.session.member;
      // ✅ Nima uchun: req.member set qilish (Controller'da ishlatish uchun)

      next();
      // ✅ Nima uchun: Request continue qilish (Next middleware/controller)
    } else {
      // ❌ Login qilmagan yoki USER type

      const message =
        Message.NOT_AUTHENTICATED;
      res.send(
        `<script> alert ("${message}"); window.location.replace('/admin/login');</script>`,
      );
      // ✅ Nima uchun: Alert qilish va login page'ga redirect
    }
  };
```

### PRODUCT CONTROLLER

```typescript
productController.getAllProducts =
  async (
    req: Request,
    res: Response,
  ) => {
    try {
      console.log("getAllProducts");
      // ✅ Debug log

      const data =
        await productService.getAllProducts();
      // ✅ Nima uchun: Service'dan barcha product'larni ol
      //    Service'da: productModel.find()

      res.render("products", {
        products: data,
      });
      // ✅ Nima uchun: EJS template'ga data pass qilish
      //    /views/products.ejs render qilish
      //    EJS'da: <%= products.map(p => ...) %>
    } catch (err) {
      console.log(
        "Error, getAllProducts:",
        err,
      );
      // ❌ Error handling
    }
  };

productController.createNewProduct =
  async (
    req: AdminRequest,
    res: Response,
  ) => {
    try {
      console.log("createNewProduct");

      if (!req.files?.length)
        throw new Errors(
          HttpCode.INTERNAL_SERVER_ERROR,
          Message.CREATE_FAILED,
        );
      // ✅ Nima uchun: Multer file upload'ni check qilish
      //    Agar rasm kerak bo'lsa va yo'q bo'lsa → Error throw

      const data: ProductInput =
        req.body;
      // ✅ req.body = {productName, productPrice, ...}

      data.productImages =
        req.files?.map((ele) => {
          return ele.path;
          // ✅ Nima uchun: req.files → file path'lar extract qilish
          //    Misol: ["/uploads/products/img1.jpg", "/uploads/products/img2.jpg"]
        });

      await productService.createNewProduct(
        data,
      );
      // ✅ Nima uchun: Service'ga data pass qilish
      //    Service'da: productModel.create(data)

      res.send(
        `<script> alert("Successful creation"); window.location.replace('/admin/product/all') </script>`,
      );
      // ✅ Nima uchun: Success alert qilish va product list'ga redirect
    } catch (err) {
      console.log(
        "Error, createNewProduct:",
        err,
      );
      // ❌ Error handling
    }
  };
```

---

## 6️⃣ SERVICES - DATABASE LAYER

```typescript
class MemberService {
  private readonly memberModel;
  // ✅ Nima uchun: Mongoose model reference saqlash
  //    Har service instance'da model available bo'ladi

  constructor() {
    this.memberModel = MemberModel;
    // ✅ Nima uchun: Constructor'da model assign qilish
    //    Dependency injection pattern (loose coupling)
  }

  public async processLogin(
    input: LoginInput,
  ): Promise<Member> {
    // ✅ Nima uchun: Async function - MongoDB query vaqt talab qiladi

    const member =
      await this.memberModel
        .findOne(
          {
            memberNick:
              input.memberNick,
          },
          // ✅ Nima uchun: memberNick orqali user topish
          //    MongoDB query: db.members.findOne({memberNick: "..."})

          {
            memberNick: 1,
            memberPassword: 1,
          },
          // ✅ Nima uchun: Projection - Faqat bu 2 field return qilish
          //    Barcha field'lar qaytarish o'rniga (Performance)
        )
        .exec();
    // ✅ .exec() - Query execute qilish

    if (!member)
      throw new Errors(
        HttpCode.NOT_FOUND,
        Message.NO_MEMBER_NICK,
      );
    // ✅ Nima uchun: Member topilmasa → Custom error throw qilish

    const isMatch =
      await bcrypt.compare(
        input.memberPassword,
        member.memberPassword,
        // ✅ Nima uchun: Database'dagi hashed password bilan compare qilish
        //    Agar match → true, else → false
        //    Plain text parol compare qilmay, hash compare qilish (Xavfsizlik)
      );

    if (!isMatch) {
      throw new Errors(
        HttpCode.UNAUTHORIZED,
        Message.WRONG_PASSWORD,
      );
      // ✅ Nima uchun: Password xato bo'lsa error
    }

    return await this.memberModel
      .findById(member._id)
      // ✅ Nima uchun: Member'ni full data bilan qaytarish
      //    Tekshiruv'dan keyin barcha field'larni ol
      .exec();
  }
}

class ProductService {
  public async getAllProducts(): Promise<
    Product[]
  > {
    // ✅ Nima uchun: Return type = Product array

    const result =
      await this.productModel
        .find()
        .exec();
    // ✅ Nima uchun: .find() - Barcha product'larni ol
    //    MongoDB: db.products.find()

    if (!result)
      throw new Errors(
        HttpCode.NOT_FOUND,
        Message.NO_DATA_FOUND,
      );
    // ✅ Nima uchun: Hech product'lar yo'q bo'lsa error

    return result;
  }

  public async createNewProduct(
    input: ProductInput,
  ): Promise<Product> {
    // ✅ Nima uchun: Input validate qilish va DB'da saqlash

    try {
      return await this.productModel.create(
        input,
      );
      // ✅ Nima uchun: Mongoose .create() method
      //    MongoDB: db.products.insertOne(input)
      //    Automatic: _id generate, timestamps set
    } catch (err) {
      console.error(
        "Error, model: createNewProduct:",
        err,
      );
      throw new Errors(
        HttpCode.BAD_REQUEST,
        Message.CREATE_FAILED,
      );
      // ✅ Nima uchun: Duplicate key yoki validation error bo'lsa catch qilish
    }
  }
}
```

---

## 7️⃣ SCHEMAS - DATABASE STRUCTURE

```typescript
const memberSchema = new Schema(
  {
    // ✅ Nima uchun: Schema = MongoDB document structure definition

    memberType: {
      type: String,
      enum: MemberType,
      // ✅ Nima uchun: Faqat MemberType.RESTAURANT yoki MemberType.USER
      //    Boshqa value'lar accept qilmaydi
      default: MemberType.USER,
      // ✅ Nima uchun: Agar memberType set qilmasa → default USER
    },

    memberNick: {
      type: String,
      index: {
        unique: true,
        sparse: true,
      },
      // ✅ Nima uchun: memberNick unikal bo'lishi kerak
      //    Bir nechta member'lar bir xil nickga ega bo'lolmaydi
      //    sparse: true = NULL bo'lsa unique check qilmaydi
      required: true,
      // ✅ Nima uchun: memberNick majburiy field
    },

    memberPassword: {
      type: String,
      select: false,
      // ✅ Nima uchun: SELECT FALSE - Default qilib password return qilmaydi
      //    query'da: .select("+memberPassword") deb alohida aytib berish kerak
      //    Security: Parolni accidentally return qilmaydi
      required: true,
    },

    memberImage: {
      // ✅ Nima uchun: Rasm path (file system'da saqlangani)
      //    Misol: "/uploads/members/123-profile.jpg"
      type: String,
    },

    memberPoints: {
      type: Number,
      default: 0,
      // ✅ Nima uchun: Loyalty points (default = 0)
    },
  },
  { timestamps: true },
  // ✅ Nima uchun: Automatic timestamp fields
  //    createdAt - Document yaratilganda
  //    updatedAt - Har safar update bo'lganda
);
```

---

## 8️⃣ TYPES/INTERFACES - TYPE SAFETY

```typescript
export interface LoginInput {
  memberNick: string;
  // ✅ Nima uchun: Login form'dan keladigan data type define qilish

  memberPassword: string;
  // ✅ TypeScript: req.body'ni type-check qilish
  //    Agar field yo'q bo'lsa → Compile error
}

export interface AdminRequest extends Request {
  // ✅ Nima uchun: Express Request'ni extend qilish
  //    Extra field'lar qo'shish: member, files

  member: Member;
  // ✅ Nima uchun: verifyRestaurant middleware'dan keladigan member

  session: Session & { member: Member };
  // ✅ Nima uchun: Session'da member field (type-safe)

  file: Express.Multer.File;
  files: Express.Multer.File[];
  // ✅ Nima uchun: Multer'dan keladigan file(s)
}
```

---

## 9️⃣ MIDDLEWARE - REQUEST PROCESSING

```typescript
// Middleware Chain Example:
routerAdmin.post(
  "/product/create",

  restaurantController.verifyRestaurant,
  // 1️⃣ FIRST MIDDLEWARE
  //    Check: req.session.member?
  //    Set: req.member = session.member
  //    Call: next()

  makeUploader("products").array(
    "productImages",
    5,
  ),
  // 2️⃣ SECOND MIDDLEWARE
  //    Parse: multipart/form-data
  //    Save: Files to /uploads/products/
  //    Set: req.files = [File, File, ...]
  //    Call: next()

  productController.createNewProduct,
  // 3️⃣ ACTUAL CONTROLLER
  //    Use: req.member (from 1st middleware)
  //    Use: req.files (from 2nd middleware)
  //    Use: req.body (from express.json())
);

// ✅ Nima uchun: Middleware chain?
//    1. Authentication check
//    2. File processing
//    3. Business logic
//    Sequential execution - har middleware next() qilguncha wait
```

---

## 🔟 ERROR HANDLING - TRY-CATCH PATTERN

```typescript
try {
  // ✅ Business logic
  const member =
    await memberService.processLogin(
      input,
    );
  req.session.member = member;
} catch (err) {
  // ✅ Error handling

  console.log(
    "Error, processLogin:",
    err,
  );
  // ✅ Nima uchun: Server log'da error yazish (Debugging uchun)

  const message =
    err instanceof Errors
      ? err.message
      : Message.SOMETHING_WENT_WRONG;
  // ✅ Nima uchun: Custom error yoki generic message
  //    Agar Errors instance → Custom message
  //    Agar unknown error → Generic message

  res.send(
    `<script> alert("${message}"); ... </script>`,
  );
  // ✅ Nima uchun: Client'ga error bo'lgani bildirish
}

// ✅ WHY TRY-CATCH?
//    - memberService.processLogin() throw qilsa (Member topilmasa, password xato)
//    - Catch block'da handle qilish
//    - Server crash bo'lmasdan, user-friendly error show qilish
```

---

## SUMMARY TABLE - NIMA UCHUN BOSH-BOG'LANIB?

| Component            | Nima uchun                   | Benefit                       |
| -------------------- | ---------------------------- | ----------------------------- |
| **package.json**     | Dependencies va scripts      | Manageable, reproducible      |
| **server.ts**        | MongoDB connection           | Database communication        |
| **app.ts**           | Middleware & setup           | Request processing pipeline   |
| **router-admin.ts**  | Route definitions            | URL → Controller mapping      |
| **controllers**      | Business logic orchestration | Clean separation              |
| **services**         | Database queries             | Reusable, testable            |
| **schemas**          | Database structure           | Data validation               |
| **types/interfaces** | Type safety                  | Compile-time errors, IDE help |
| **middleware**       | Request processing           | Authentication, file upload   |
| **try-catch**        | Error handling               | Graceful failure              |

---

**Barcha kod'ning maqsadi**: RESTAURANT'lar o'z PRODUCT'larini manage qilishi uchun**AMMO BIROZ CLEAN QILISH KERAK** 🔧✨
