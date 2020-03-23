FROM cypress/included:4.0.1
WORKDIR /app
ENV CYPRESS_baseUrl=http://demo-app:8080
COPY . . 