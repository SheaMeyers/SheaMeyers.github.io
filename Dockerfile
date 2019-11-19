FROM node:alpine as builder
WORKDIR .
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /build /usr/share/nginx/html

# To run use
#   docker build -t sheameyers/personal-website .
# and then
#   docker run -p 8080:80 sheameyers/personal-website
# Note: the ports, localhost:8080 is forwarded to Nginx port 80