-- CreateTable
CREATE TABLE "Instrument" (
	"id"	INTEGER NOT NULL,
	"smena"	INTEGER NOT NULL,
	"name"	TEXT NOT NULL,
	"description"	TEXT,
	"type"	TEXT,
	"test"	DATETIME NOT NULL,
	"next_test"	DATETIME,
	PRIMARY KEY("id" AUTOINCREMENT)
);
