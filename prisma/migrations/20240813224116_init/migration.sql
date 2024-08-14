-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "local_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_backed_up" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "positive_state" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "local_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_backed_up" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "local_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_backed_up" BOOLEAN NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "recurrentDate" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "account_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
