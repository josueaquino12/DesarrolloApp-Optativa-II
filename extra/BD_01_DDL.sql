CREATE TABLE "formulario" (
  "idformulario" SERIAL PRIMARY KEY,
  "titulo" varchar(160),
  "descripcion" varchar(160),
  "linkacceso" varchar(200),
  "codigoacceso" varchar(50),
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  "deletedAt" timestamp with time zone
);

CREATE TABLE "componente" (
  "idcomponente" SERIAL PRIMARY KEY,
  "idformulario" int,
  "idtipocomponente" int,
  "labelname" varchar(50),
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  "deletedAt" timestamp with time zone
);