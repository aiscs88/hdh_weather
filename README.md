# Simple Heidenheim weather App using react

A Simple react app to fetch the weather from 

# Running the App
## With Docker
- Rename and fill **.env** file
`cp .env.example .env`

- Build the image
`docker build . -t hdh_weather`

- Run an instance
`docker run --rm -p 0.0.0.0:3000:3000 hdh_weather`
