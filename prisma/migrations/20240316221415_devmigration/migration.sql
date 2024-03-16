-- CreateTable
CREATE TABLE "instruments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "smena" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "testedDate" TEXT NOT NULL,
    "nextTestDate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "username" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "pass" TEXT NOT NULL
);
