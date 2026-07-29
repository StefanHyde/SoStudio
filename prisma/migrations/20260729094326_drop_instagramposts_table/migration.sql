/*
  Warnings:

  - The primary key for the `InstagramToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `token` on the `InstagramToken` table. All the data in the column will be lost.
  - You are about to drop the `InstagramPost` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `accessToken` to the `InstagramToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "InstagramToken" DROP CONSTRAINT "InstagramToken_pkey",
DROP COLUMN "token",
ADD COLUMN     "accessToken" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "InstagramToken_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "InstagramToken_id_seq";

-- DropTable
DROP TABLE "InstagramPost";
