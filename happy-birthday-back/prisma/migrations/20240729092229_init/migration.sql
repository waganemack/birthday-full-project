-- CreateTable
CREATE TABLE "Intervenant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "birthday" DATETIME NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "birthday" DATETIME NOT NULL,
    "lastname" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Quote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quote" TEXT NOT NULL,
    "author" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Intervenant_email_key" ON "Intervenant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
