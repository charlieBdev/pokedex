# The Pokéquiz

The [Pokéquiz](https://thepokequiz.netlify.app/) is a game made for fun and as something to add to my portfolio while learning react-query.

The frontend connects to the [PokéAPI](https://pokeapi.co/) to get random Pokémon for each question and the backend stores the Pokéhall of Fame for getting all scores and posting a score.

If you want to play around with the code or have any cool ideas get in touch!

## Setting up the Backend

1. Clone the backend repo

    `git clone https://github.com/charlieBdev/pokeserver`

2. Install dependencies

    `npm i`

    > You will need Postgres to connect to the local DB for development.

3. Create two .env files - .env.development and .env.production

    .env.development should have... PGDATABASE=pokedex

    .env.production should have... DATABASE_URL=`<askmeforthis>`

4. Setup the local db and scores table

    `npm run setup-db`

    `npm run setup-table`

5. Start the server

    `npm run dev`

## Setting up the Frontend

1. Clone the frontend repo

    `git clone https://github.com/charlieBdev/pokedex`

2. Install dependencies

    ```npm i```

3. Create .env file with VITE_API=`<askmeforthis>`

4. Start the client

    ```npm run dev```

    > Change the database variable in utils to connect to the local DB

## Technology

**Backend**

- Postgres
- Express

**Frontend**

- React with Vite
- Axios
- React Query
- Tailwind
- Framer Motion
- Canvas-Confetti

### Notes

The Kanban board is [here](https://trello.com/b/OGe5Htz6/pokequiz) if you would like to contribute. You will need to request access.

The live database for the Pokéhall of Fame is hosted on ElephantSQL and the API on Render.

### Thanks for looking!
