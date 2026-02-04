# Tech stack
--- 
**Backend**
- Node.js 
- Express
- Postgres -> For file storage
- ORM -> Prisma
- OpenAI API
- fs
---Tests---
- Mocha, JTest

**Frontend**
- React
- Multer
- Tailwind

**Devops**
- Docker
- K8s
- Github Actions


## Project Architecture

API Design

- POST /api/v1/auth/login
    - Validate the login credentials
    - Generate a JWT token and send it to client

- GET /api/v1/auth/me  
    - Get users own profile
    - Store the profile to DB
    - Generate JWT token and return to user for future requests

- POST /api/v1/auth/register
    - Create a user profile 
    - Store in DB and return JWT token 

- PUT /api/v1/users/:id
- DELETE /api/v1/users/:id


- GET /api/v1/documents
- GET /api/v1/documents/:id
- PUT /api/v1/documents
- POST /api/v1/documents

- GET /api/v1/flashcards
- GET /api/v1/flashcards/:id
- DELETE /api/v1/flashcards/:id


- GET /api/v1/quiz
- GET /api/v1/quiz/:id
- GET /api/v1/quiz/:id

