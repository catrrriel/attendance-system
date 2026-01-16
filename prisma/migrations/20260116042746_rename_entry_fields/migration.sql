/*
  Warnings:

  - You are about to drop the column `entryTime` on the `Attendance` table. All the data in the column will be lost.
  - You are about to drop the column `exitTime` on the `Attendance` table. All the data in the column will be lost.
  - Added the required column `entryAt` to the `Attendance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exitAt` to the `Attendance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Attendance" DROP COLUMN "entryTime",
DROP COLUMN "exitTime",
ADD COLUMN     "entryAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "exitAt" TIMESTAMP(3) NOT NULL;
