-- CreateTable
CREATE TABLE "Songs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "Songs_pkey" PRIMARY KEY ("id")
);
