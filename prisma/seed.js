"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var prismadb_1 = require("../lib/prismadb");
var main = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var user1, user2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            prismadb_1.default.user.create({
              data: {
                name: "Alice Smith",
                email: "alice@example.com",
                emailVerified: new Date(),
                image: "https://api.dicebear.com/9.x/big-smile/svg",
              },
            }),
          ];
        case 1:
          user1 = _a.sent();
          return [
            4 /*yield*/,
            prismadb_1.default.user.create({
              data: {
                name: "Bob Johnson",
                email: "bob@example.com",
                emailVerified: new Date(),
                image: "https://api.dicebear.com/9.x/big-smile/svg",
              },
            }),
          ];
        case 2:
          user2 = _a.sent();
          // Create accounts for the users
          return [
            4 /*yield*/,
            prismadb_1.default.account.createMany({
              data: [
                {
                  userId: user1.id,
                  type: "oauth",
                  provider: "google",
                  providerAccountId: "google-id-1",
                  refresh_token: "refresh-token-1",
                  access_token: "access-token-1",
                  expires_at: 3600,
                  token_type: "Bearer",
                  scope: "email profile",
                  id_token: "id-token-1",
                  session_state: "active",
                },
                {
                  userId: user2.id,
                  type: "oauth",
                  provider: "github",
                  providerAccountId: "github-id-1",
                  refresh_token: "refresh-token-2",
                  access_token: "access-token-2",
                  expires_at: 3600,
                  token_type: "Bearer",
                  scope: "repo user",
                  id_token: "id-token-2",
                  session_state: "active",
                },
              ],
            }),
          ];
        case 3:
          // Create accounts for the users
          _a.sent();
          // Create sessions for the users
          return [
            4 /*yield*/,
            prismadb_1.default.session.createMany({
              data: [
                {
                  sessionToken: "session-token-1",
                  userId: user1.id,
                  expires: new Date(Date.now() + 3600 * 1000), // 1 hour expiry
                },
                {
                  sessionToken: "session-token-2",
                  userId: user2.id,
                  expires: new Date(Date.now() + 3600 * 1000), // 1 hour expiry
                },
              ],
            }),
          ];
        case 4:
          // Create sessions for the users
          _a.sent();
          // Create verification tokens
          return [
            4 /*yield*/,
            prismadb_1.default.verificationToken.createMany({
              data: [
                {
                  identifier: user1.email,
                  token: "verification-token-1",
                  expires: new Date(Date.now() + 3600 * 1000), // 1 hour expiry
                },
                {
                  identifier: user2.email,
                  token: "verification-token-2",
                  expires: new Date(Date.now() + 3600 * 1000), // 1 hour expiry
                },
              ],
            }),
          ];
        case 5:
          // Create verification tokens
          _a.sent();
          // Create blog posts
          return [
            4 /*yield*/,
            prismadb_1.default.blog.createMany({
              data: [
                {
                  title: "First Blog Post",
                  desc: "This is the description for the first blog post.",
                  img: "https://api.dicebear.com/9.x/big-smile/svg",
                  category: "Technology",
                  userEmail: user1.email,
                  featured: true,
                  topPost: false,
                },
                {
                  title: "Second Blog Post",
                  desc: "This is the description for the second blog post.",
                  img: "https://api.dicebear.com/9.x/big-smile/svg",
                  category: "Health",
                  userEmail: user2.email,
                  featured: false,
                  topPost: true,
                },
              ],
            }),
          ];
        case 6:
          // Create blog posts
          _a.sent();
          console.log("Seeding completed.");
          return [2 /*return*/];
      }
    });
  });
};
main()
  .catch(function (e) {
    console.error(e);
    process.exit(1);
  })
  .finally(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, prismadb_1.default.$disconnect()];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  });
