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
  "idComponente" SERIAL PRIMARY KEY,
  "idFormulario" int,
  "idTipoComponente" int,
  "labelname" varchar(50),
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  "deletedAt" timestamp with time zone
);

CREATE TABLE "tipocomponente" (
  "idTipoComponente" SERIAL PRIMARY KEY,
  "nombreComponenete" varchar(50),
  "descripcion" varchar(160),
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  "deletedAt" timestamp with time zone
);

ALTER TABLE "componente" 
    ADD FOREIGN KEY ("idFormulario") REFERENCES "formulario" ("idFormulario"),
    ADD FOREIGN KEy ("idTipoComponente") REFERENCES "tipocomponente" ("idTipoComponente")