# Moment 4.1 - Autentisering och säkerhet - DT207G
### Beskrivning:
Denna uppgift gick ut på att skapa en REST-webbtjänst som hanterar registrering och inloggning av användare, samt skydd av resurser med autentisering via JWT (JSON Web Token). Applikationen är byggd med Node.js, Express och MongoDB Atlas via Mongoose. Användarkonton lagras i en databas och lösenorden hashas med hjälp av bcrypt för att skydda användarens känsliga uppgifter. Endast inloggade användare kan komma åt vissa skyddade resurser, som t.ex. arbetserfarenheter.

### Länk
Webbtjänsten är publicerad via Render:

Installation och databas:
För att köra denna webbtjänst krävs en MongoDB Atlas-databas. Följ dessa steg för att sätta upp projektet lokalt: 
Klona ner källkoden:
```bash
git clone https://github.com/julieandersson/moment4.1_DT207G.git
```
Installera nödvändiga beroenden (förutsatt att Node.js är installerat för att installera alla nödvändiga beroenden.): 
```bash
npm install
```

Skapa en .envfil och lägg till dina egna miljövariabler baserat på .env.sample. Exempel:
```bash
PORT=3001
DATABASE=
JWT_SECRET_KEY="SecretKey"
```

### Databasstruktur:
Applikationen använder MongoDB för att lagra användarkonton och arbetserfarenheter.

#### User collection:
**Fält**:
- username (String, unikt, obligatoriskt)
- password (String, obligatoriskt, hashat)
- created (Date, datum för skapande)

#### Workexperience Collection:
**Fält**:
- companyname (String, obligatoriskt)
- jobtitle (String, obligatoriskt)
- location (String, obligatoriskt)
- startdate (Date, obligatoriskt)
- enddate (Date, obligatoriskt)
- description (String, obligatoriskt)

### Funktionalitet:
Applikationen hanterar följande funktioner:
1. Registrering av användare: Skapar ett nytt användarkonto och hashar lösenordet.
2. Inloggning: Autentiserar användaren och genererar en JWT vid lyckad inloggning.
3. Skyddade resurser: Hämtar arbetserfarenheter, men kräver att användaren är inloggad och har en giltig JWT-token.

### API-användning:
Nedan finns beskrivning på hur man når webbtjänstens olika endpoints:

**Autentisering:**
| Metod | Ändpunkt  | Beskrivning 
|--|--|--|
|POST|/api/register|Registrerar en ny användare.|
|POST|/api/login|Loggar in användare, returnerar en JWT.|

Exempel på POST-data för **/api/register** och **/api/login**:
```bash
{
  "username": "Julie",
  "password": "lösenord"
}
```

**Skyddade resurser**:
| Metod | Ändpunkt  | Beskrivning 
|--|--|--|
|GET|/api/workexperience|Hämtar alla arbetserfarenheter (kräver JWT).|

När du loggar in med POST /api/login, får du en JWT som svar. Denna JWT måste skickas i Authorization-headern för att få åtkomst till skyddade resurser, exempelvis:
```bash
Authorization: Bearer <din_jwt_token>
```

### Exempel på svar från skyddade resurser:

```bash
[
  {
    "_id": "66faf005e356757ee6d3373c",
    "companyname": "Tech Solutions",
    "jobtitle": "Systemanalytiker",
    "location": "Göteborg",
    "startdate": "2021-06-01T00:00:00.000Z",
    "enddate": "2022-12-31T00:00:00.000Z",
    "description": "Analys av systemkrav och designlösningar"
  }
]
```

### Utvecklingsmiljö:
Verktyg och tekniker som används i detta projekt:
- Node.js: Server-side JavaScript runtime.
- Express: Ramverk för att skapa och hantera HTTP-server och API.
- MongoDB Atlas: NoSQL-databas som används för att lagra användarkonton och arbetserfarenheten-
- JWT (jsonwebtoken): Använfs för att skapa och validera JWT för autentisering.
- bcrypt: Används för att hasha lösenord innan det lagras i databasen.
-Nodemon: Används under utveckling för att automatiskt starta om servern vid kodändringar.
- dotenv: Hantering av miljövariabler, såsom databasanslutningar, via .env-fil.
- Thunderclient: Verktyg för att testa API-anrop under utvecklingen av arbetet.

### Skapad av:
- Julie Andersson
- Webbutvecklingsprogrammet på Mittuniversitetet i Sundsvall
- Moment 4.1 i kursen DT207G Backendbaserad Webbutveckling

